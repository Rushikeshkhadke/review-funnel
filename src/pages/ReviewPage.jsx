import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import { getRandomReview } from '../utils/reviewTemplates';
import { Star, RefreshCw, Copy, Check, ExternalLink } from 'lucide-react';

const getContrastColor = (hexcolor) => {
  if (!hexcolor) return '#ffffff';
  const hex = hexcolor.replace("#", "");
  if (hex.length !== 6) return '#ffffff';
  const r = parseInt(hex.substr(0,2), 16);
  const g = parseInt(hex.substr(2,2), 16);
  const b = parseInt(hex.substr(4,2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#111827' : '#ffffff';
};

export default function ReviewPage() {
  const { clientId } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStar, setSelectedStar] = useState(5);
  const [generatedReview, setGeneratedReview] = useState('');
  const [copiedAndRedirecting, setCopiedAndRedirecting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchClient();
    logScan();
  }, [clientId]);

  const logScan = async () => {
    try {
      await supabase.rpc('increment_scan', { c_id: clientId });
    } catch (e) {
      console.error("Failed to log scan", e);
    }
  };

  const fetchClient = async () => {
    try {
      const { data, error } = await supabase.from('clients').select('*').eq('id', clientId).single();
      if (error) throw error;
      if (data) {
        setClient(data);
        const initialReview = getRandomReview(data.business_type, 5, data.brand_name, data.city);
        setGeneratedReview(initialReview);
      } else {
        setErrorMsg('Client not found.');
      }
    } catch (err) {
      setErrorMsg('Failed to load client details.');
    } finally {
      setLoading(false);
    }
  };

  const handleStarSelect = (stars) => {
    setSelectedStar(stars);
    generateReview(stars);
  };

  const generateReview = (stars = selectedStar) => {
    if (!client) return;
    const text = getRandomReview(client.business_type, stars, client.brand_name, client.city);
    setGeneratedReview(text);
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const getGoogleReviewUrl = (baseUrl) => {
    if (!baseUrl) return '#';
    let url = baseUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;
    return url;
  };

  const handleCopyAndPost = async () => {
    if (!client || !client.google_review_link) {
      alert("Google Review link is missing for this client!");
      return;
    }
    
    setCopiedAndRedirecting(true);
    await copyToClipboard(generatedReview);

    const targetUrl = getGoogleReviewUrl(client.google_review_link);

    setTimeout(() => {
      window.location.href = targetUrl;
      setTimeout(() => setCopiedAndRedirecting(false), 2000);
    }, 600);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (errorMsg || !client) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white p-4 text-center">
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl max-w-sm">
          <p className="text-red-400 font-medium">{errorMsg || 'Client page not found.'}</p>
        </div>
      </div>
    );
  }

  const primaryColor = client.primary_color || '#8b5cf6';
  const btnTextColor = getContrastColor(primaryColor);
  const activeStarTextColor = getContrastColor(primaryColor);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 text-white relative overflow-hidden font-sans"
      style={{
        background: `radial-gradient(120% 100% at 50% 0%, ${primaryColor}40 0%, #050505 85%)`,
        backgroundColor: '#050505'
      }}
    >
      {/* Intense Background Glow */}
      <div 
        className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-50"
        style={{ backgroundColor: primaryColor }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-20%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: primaryColor }}
      />

      <main className="w-full max-w-md mx-auto relative z-10 flex-1 flex flex-col items-center justify-center py-8">
        <div className="text-center mb-10 flex flex-col items-center animate-fade-in-up">
          {client.logo_url && (
            <div 
              className="w-28 h-28 mb-5 rounded-3xl p-3 backdrop-blur-2xl flex items-center justify-center"
              style={{
                backgroundColor: `${primaryColor}15`,
                border: `1px solid ${primaryColor}40`,
                boxShadow: `0 25px 50px -12px ${primaryColor}40, inset 0 0 20px ${primaryColor}20`
              }}
            >
              <img src={client.logo_url} alt={client.brand_name} className="max-h-full max-w-full object-contain drop-shadow-xl" />
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2 leading-tight drop-shadow-md">
            {client.brand_name}
          </h1>
          <p 
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{ backgroundColor: `${primaryColor}20`, color: `${primaryColor}ff` }}
          >
            {client.city ? `${client.city} • ` : ''}{client.business_type}
          </p>
        </div>

        <div 
          className="w-full backdrop-blur-xl rounded-3xl p-7 text-center mb-6 animate-fade-in-up transition-all"
          style={{
            backgroundColor: `${primaryColor}10`,
            border: `1px solid ${primaryColor}30`,
            boxShadow: `0 20px 40px -10px ${primaryColor}30`
          }}
        >
          <h2 className="text-lg font-bold text-white mb-6 drop-shadow-sm">How was your experience?</h2>

          <div className="flex justify-center gap-4 mb-8">
            {[3, 4, 5].map((stars) => {
              const active = selectedStar === stars;
              return (
                <button
                  key={stars}
                  onClick={() => handleStarSelect(stars)}
                  className={`flex items-center gap-1.5 px-5 py-3.5 rounded-2xl font-black transition-all transform active:scale-95 ${
                    active ? 'scale-105' : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: active ? primaryColor : `${primaryColor}15`,
                    color: active ? activeStarTextColor : '#ffffff',
                    border: `1px solid ${active ? primaryColor : `${primaryColor}40`}`,
                    boxShadow: active ? `0 0 25px ${primaryColor}80` : 'none'
                  }}
                >
                  <span className="text-xl">{stars}</span>
                  <Star size={20} fill={active ? activeStarTextColor : 'none'} className={active ? '' : 'text-amber-400'} />
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            <div 
              className="rounded-2xl p-5 text-left relative group min-h-[110px] flex items-center"
              style={{
                backgroundColor: `#00000060`,
                border: `1px solid ${primaryColor}20`,
                borderLeft: `4px solid ${primaryColor}`
              }}
            >
              <p className="text-gray-100 text-sm leading-relaxed pr-8 font-medium italic w-full">"{generatedReview}"</p>
              <button 
                onClick={() => generateReview()} 
                title="Generate New Review"
                className="absolute top-3 right-3 transition-colors p-2 rounded-xl active:scale-90"
                style={{ backgroundColor: `${primaryColor}20`, color: '#ffffff' }}
              >
                <RefreshCw size={16} />
              </button>
            </div>

            <button
              onClick={handleCopyAndPost}
              disabled={copiedAndRedirecting}
              className={`w-full flex items-center justify-center gap-2 py-4 px-5 rounded-2xl text-[15px] font-black transition-all hover:opacity-90 active:scale-95 cursor-pointer ${copiedAndRedirecting ? 'opacity-90 scale-95' : ''}`}
              style={{
                backgroundColor: primaryColor,
                color: btnTextColor,
                boxShadow: `0 10px 30px ${primaryColor}60`
              }}
            >
              {copiedAndRedirecting ? (
                <>
                  <Check size={20} className="animate-bounce" />
                  <span>Copied! Opening Google...</span>
                </>
              ) : (
                <>
                  <Copy size={20} />
                  <span>Copy Review & Post on Google</span>
                  <ExternalLink size={20} />
                </>
              )}
            </button>
            <p className="text-xs mt-4 font-semibold opacity-70" style={{ color: '#ffffff' }}>
              Text will copy automatically. Just paste it in Google Maps!
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-[10px] font-bold tracking-[0.2em] uppercase z-10" style={{ color: `${primaryColor}80` }}>
        Powered by Marketing Motion
      </footer>
    </div>
  );
}