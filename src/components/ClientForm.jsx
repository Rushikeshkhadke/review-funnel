import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { Vibrant } from 'node-vibrant/browser';
import { X, Palette } from 'lucide-react';

export default function ClientForm({ onClose, onComplete, initialData }) {
  const [formData, setFormData] = useState(
    initialData || { 
      brand_name: '', 
      business_type: 'Restaurant', 
      google_review_link: '', 
      city: '',
      primary_color: '#8b5cf6' 
    }
  );
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [extractingColor, setExtractingColor] = useState(false);

  const formatUrl = (url) => {
    if (!url) return '';
    let formatted = url.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = 'https://' + formatted;
    }
    return formatted;
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (!selectedFile) return;

    // Auto-extract color immediately so user can see/change it before saving
    setExtractingColor(true);
    try {
      const objectUrl = URL.createObjectURL(selectedFile);
      const palette = await Vibrant.from(objectUrl).getPalette();
      if (palette) {
        const hex = palette.Vibrant?.hex || palette.DarkVibrant?.hex || palette.Muted?.hex || '#8b5cf6';
        setFormData(prev => ({ ...prev, primary_color: hex }));
      }
    } catch (err) {
      console.error('Vibrant color extraction failed', err);
    }
    setExtractingColor(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!initialData && !file) return alert('Please upload a logo!');
    setLoading(true);

    try {
      let updatedData = { ...formData };
      updatedData.google_review_link = formatUrl(updatedData.google_review_link);

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = Date.now() + '.' + fileExt;
        const { error: uploadError } = await supabase.storage.from('logos').upload(fileName, file);
        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage.from('logos').getPublicUrl(fileName);
        updatedData.logo_url = publicUrl;
      }

      if (initialData) {
        const { error: dbError } = await supabase.from('clients').update(updatedData).eq('id', initialData.id);
        if (dbError) throw dbError;
      } else {
        const { error: dbError } = await supabase.from('clients').insert([updatedData]);
        if (dbError) throw dbError;
      }

      setLoading(false);
      onComplete();
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-[#111] border border-white/10 p-6 rounded-2xl w-full max-w-md relative my-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X size={20}/></button>
        <h2 className="text-2xl font-bold mb-6 text-white">{initialData ? 'Edit Client' : 'Add New Client'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1 font-medium">Brand Name</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:border-purple-500 transition-colors outline-none" value={formData.brand_name} onChange={e=>setFormData({...formData, brand_name: e.target.value})} />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1 font-medium">Business Type</label>
              <select className="w-full bg-[#111] border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-purple-500" value={formData.business_type} onChange={e=>setFormData({...formData, business_type: e.target.value})}>
                <option>Restaurant</option>
                <option>Cafe</option>
                <option>Salon</option>
                <option>Clothing/Saree</option>
                <option>Mobile Shop</option>
                <option>Grocery</option>
                <option>Chartered Accountant (CA)</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1 font-medium">City</label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:border-purple-500 outline-none" value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1 font-medium">Google Review Link (Place ID)</label>
            <input required type="url" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white placeholder-gray-600 focus:border-purple-500 outline-none" placeholder="https://search.google.com/local/writereview?placeid=..." value={formData.google_review_link} onChange={e=>setFormData({...formData, google_review_link: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1 font-medium">Logo Upload {initialData && <span className="text-purple-400 text-xs">(Leave empty to keep)</span>}</label>
            <input required={!initialData} type="file" accept="image/png, image/jpeg, image/webp" className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 transition-colors" onChange={handleFileChange} />
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-white flex items-center gap-1.5"><Palette size={16}/> Theme Color</label>
              <p className="text-[10px] text-gray-400 mt-1">
                {extractingColor ? 'Extracting from logo...' : 'Auto-extracted. Click to change manually.'}
              </p>
            </div>
            <input 
              type="color" 
              value={formData.primary_color} 
              onChange={e => setFormData({...formData, primary_color: e.target.value})}
              className="w-12 h-12 rounded-lg cursor-pointer bg-transparent border-none outline-none" 
            />
          </div>

          <button disabled={loading || extractingColor} type="submit" className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:opacity-90 active:scale-[0.98] transition-all">
            {loading ? 'Processing...' : (initialData ? 'Save Changes' : 'Create Client Funnel')}
          </button>
        </form>
      </div>
    </div>
  );
}