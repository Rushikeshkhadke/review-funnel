import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import { getRandomReview } from '../utils/reviewTemplates';
import { Star, RefreshCw, Copy, Check, ExternalLink } from 'lucide-react';

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
  }, [clientId]);

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
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    // We removed the code that adds ",5" to the URL.
    // Appending ",5" to a PlaceID URL invalidates the Place ID and causes Google to NOT open the review box!
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
  const secondaryColor = client.secondary_color || '#ec4899';

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 text-white relative overflow-hidden font-sans"
      style={{
        background: `radial-gradient(circle at top, ${primaryColor}15 0%, #050505 100%)`,
        backgroundColor: '#050505'
      }}
    >
      <div 
        className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-40 transition-colors duration-700"
        style={{ backgroundColor: primaryColor }}
      />

      <main className="w-full max-w-md mx-auto relative z-10 flex-1 flex flex-col items-center justify-center py-8">
        <div className="text-center mb-10 flex flex-col items-center animate-fade-in-up">
          {client.logo_url && (
            <div className="w-24 h-24 mb-5 rounded-2xl p-3 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center">
              <img src={client.logo_url} alt={client.brand_name} className="max-h-full max-w-full object-contain" />
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">{client.brand_name}</h1>
          <p className="text-sm text-gray-400 font-medium tracking-wide uppercase text-[11px]">{client.city ? `${client.city} • ` : ''}{client.business_type}</p>
        </div>

        <div className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 shadow-2xl text-center mb-6 animate-fade-in-up transition-all">
          <h2 className="text-lg font-semibold text-gray-200 mb-6">How was your experience?</h2>

          <div className="flex justify-center gap-3 mb-8">
            {[3, 4, 5].map((stars) => {
              const active = selectedStar === stars;
              return (
                <button
                  key={stars}
                  onClick={() => handleStarSelect(stars)}
                  className={`flex items-center gap-1.5 px-4 py-3 rounded-2xl font-bold transition-all transform active:scale-95 ${
                    active 
                      ? 'scale-105 shadow-lg text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
                  }`}
                  style={{
                    backgroundColor: active ? primaryColor : undefined,
                    boxShadow: active ? `0 0 20px ${primaryColor}66` : undefined
                  }}
                >
                  <span className="text-xl">{stars}</span>
                  <Star size={18} fill={active ? '#fff' : 'none'} className={active ? 'text-white' : 'text-amber-400'} />
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 text-left relative group min-h-[100px] flex items-center">
              <p className="text-gray-200 text-sm leading-relaxed pr-8 font-normal italic w-full">"{generatedReview}"</p>
              <button 
                onClick={() => generateReview()} 
                title="Generate New Review"
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg bg-white/5 hover:bg-white/10 active:scale-90"
              >
                <RefreshCw size={14} />
              </button>
            </div>

            <button
              onClick={handleCopyAndPost}
              disabled={copiedAndRedirecting}
              className={`w-full flex items-center justify-center gap-2 py-4 px-5 rounded-2xl text-sm font-bold text-white transition-all shadow-xl hover:opacity-90 active:scale-95 cursor-pointer ${copiedAndRedirecting ? 'opacity-90 scale-95' : ''}`}
              style={{
                backgroundColor: secondaryColor || primaryColor,
                boxShadow: `0 0 25px ${(secondaryColor || primaryColor)}40`
              }}
            >
              {copiedAndRedirecting ? (
                <>
                  <Check size={18} className="text-white animate-bounce" />
                  <span>Copied! Opening Google...</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copy Review & Post on Google</span>
                  <ExternalLink size={18} />
                </>
              )}
            </button>
            <p className="text-[11px] text-gray-500 mt-3 font-medium">Text will copy automatically. Just paste it in Google Maps!</p>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-[10px] text-gray-600 font-medium tracking-widest uppercase z-10">
        Powered by Marketing Motion
      </footer>
    </div>
  );
}