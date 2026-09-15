import React, { useState } from 'react';
import { supabase } from '../utils/supabase';
import { Vibrant } from 'node-vibrant/browser';
import { X } from 'lucide-react';

export default function ClientForm({ onClose, onComplete, initialData }) {
  const [formData, setFormData] = useState(
    initialData || { brand_name: '', business_type: 'Restaurant', google_review_link: '', city: '' }
  );
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!initialData && !file) return alert('Please upload a logo!');
    setLoading(true);

    try {
      let updatedData = { ...formData };

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = Date.now() + '.' + fileExt;
        const { error: uploadError } = await supabase.storage.from('logos').upload(fileName, file);
        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage.from('logos').getPublicUrl(fileName);
        updatedData.logo_url = publicUrl;

        // Better color extraction using node-vibrant
        try {
          const objectUrl = URL.createObjectURL(file);
          const palette = await Vibrant.from(objectUrl).getPalette();
          
          if (palette) {
            // Prefer Vibrant for primary, fallback to DarkVibrant or Muted
            updatedData.primary_color = palette.Vibrant?.hex || palette.DarkVibrant?.hex || palette.Muted?.hex || '#8b5cf6';
            // Prefer LightVibrant for secondary, fallback to LightMuted
            updatedData.secondary_color = palette.LightVibrant?.hex || palette.LightMuted?.hex || '#ec4899';
          }
        } catch (colorError) {
          console.error('Vibrant color extraction failed', colorError);
          updatedData.primary_color = '#6b21a8';
          updatedData.secondary_color = '#3b82f6';
        }
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#111] border border-white/10 p-6 rounded-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X size={20}/></button>
        <h2 className="text-2xl font-bold mb-6 text-white">{initialData ? 'Edit Client' : 'Add New Client'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Brand Name</label><input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" value={formData.brand_name} onChange={e=>setFormData({...formData, brand_name: e.target.value})} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Business Type</label><select className="w-full bg-[#111] border border-white/10 rounded-lg p-2.5 text-white" value={formData.business_type} onChange={e=>setFormData({...formData, business_type: e.target.value})}><option>Restaurant</option><option>Clothing/Saree</option><option>Mobile Shop</option><option>Salon</option><option>Cafe</option><option>Grocery</option><option>Other</option></select></div>
          <div><label className="block text-sm text-gray-400 mb-1">City</label><input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Google Review Link</label><input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" value={formData.google_review_link} onChange={e=>setFormData({...formData, google_review_link: e.target.value})} /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Logo Upload {initialData && <span className="text-purple-400 text-xs">(Leave empty to keep current)</span>}</label><input required={!initialData} type="file" accept="image/*" className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700" onChange={e=>setFile(e.target.files[0])} /></div>
          <button disabled={loading} type="submit" className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:opacity-90">{loading ? 'Processing...' : (initialData ? 'Save Changes' : 'Create Client Funnel')}</button>
        </form>
      </div>
    </div>
  );
}
