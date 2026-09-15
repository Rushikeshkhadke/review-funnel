import React, { useState, useEffect } from 'react';
import { Plus, Download, ExternalLink, Copy, Check, Trash2, Edit } from 'lucide-react';
import { supabase } from '../utils/supabase';
import ClientForm from '../components/ClientForm';
import { QRCodeSVG } from 'qrcode.react';

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const { data } = await supabase.from('clients').select('*').order('created_at', { ascending: false });
    if (data) setClients(data);
  };

  const handleDeleteClient = async (id, brandName) => {
    if (!window.confirm(`Are you sure you want to delete "${brandName}"?`)) return;

    try {
      const { error } = await supabase.from('clients').delete().eq('id', id);
      if (error) throw error;
      fetchClients();
    } catch (err) {
      alert('Failed to delete client: ' + err.message);
    }
  };

  const copyLink = (clientId) => {
    const reviewUrl = window.location.origin + '/review/' + clientId;
    navigator.clipboard.writeText(reviewUrl);
    setCopiedId(clientId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadQR = (clientId, brandName) => {
    const svg = document.getElementById('qr-' + clientId);
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width + 40;
      canvas.height = img.height + 40;
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 20, 20);
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = brandName.replace(/\s+/g, '_') + '_QR.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 sm:p-10 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Review Funnels
            </h1>
            <p className="text-gray-400 text-sm mt-1">Manage your clients and generate smart review pages.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)} 
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 transition-all px-5 py-3 rounded-xl font-semibold shadow-[0_0_25px_rgba(147,51,234,0.4)] text-sm"
          >
            <Plus size={18} /> New Client
          </button>
        </header>

        {clients.length === 0 ? (
          <div className="text-center py-24 border border-white/5 rounded-3xl bg-white/5 backdrop-blur-md">
            <p className="text-gray-400 text-sm">No clients added yet. Create your first funnel!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map(client => {
              const reviewUrl = window.location.origin + '/review/' + client.id;
              const isCopied = copiedId === client.id;
              return (
                <div key={client.id} className="p-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all shadow-xl group relative">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl p-2 bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                          <img src={client.logo_url} alt={client.brand_name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="overflow-hidden">
                          <h3 className="text-lg font-bold leading-snug truncate">{client.brand_name}</h3>
                          <p className="text-xs text-gray-400">{client.business_type} • {client.city}</p>
                        </div>
                      </div>

                      {/* Actions Buttons */}
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => setEditingClient(client)} 
                          className="text-gray-500 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-blue-500/10"
                          title="Edit Client"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteClient(client.id, client.brand_name)} 
                          className="text-gray-500 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-red-500/10"
                          title="Delete Client"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Brand Colors Preview */}
                    <div className="flex items-center gap-2 my-4">
                      <span className="text-xs text-gray-500">Theme:</span>
                      <div className="flex gap-1.5">
                        <div className="h-4 w-6 rounded-md shadow-sm" style={{ backgroundColor: client.primary_color }} title={'Primary: ' + client.primary_color} />
                        <div className="h-4 w-6 rounded-md shadow-sm" style={{ backgroundColor: client.secondary_color }} title={'Secondary: ' + client.secondary_color} />
                      </div>
                    </div>

                    {/* QR Code */}
                    <div className="my-5 p-4 bg-white rounded-2xl flex flex-col items-center justify-center relative">
                      <QRCodeSVG 
                        id={'qr-' + client.id}
                        value={reviewUrl} 
                        size={140}
                        level="H"
                        includeMargin={false}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => copyLink(client.id)}
                        className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-white/10"
                      >
                        {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        <span>{isCopied ? 'Copied!' : 'Copy Link'}</span>
                      </button>

                      <button
                        onClick={() => downloadQR(client.id, client.brand_name)}
                        className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-white/10"
                      >
                        <Download size={14} />
                        <span>Download QR</span>
                      </button>
                    </div>

                    <a 
                      href={'/review/' + client.id} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-full flex items-center justify-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-purple-500/30"
                    >
                      <span>Preview Funnel</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {(showModal || editingClient) && (
        <ClientForm 
          initialData={editingClient}
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }} 
          onComplete={fetchClients} 
        />
      )}
    </div>
  );
}