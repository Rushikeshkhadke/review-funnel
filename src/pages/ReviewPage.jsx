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

  useEffect(() => {
    fetchClient();
  }, [clientId]);

  const fetchClient = async () => {
    const { data } = await supabase.from('clients').select('*').eq('id', clientId).single();
    if (data) {
      setClient(data);
      const initialReview = getRandomReview(data.business_type, 5, data.brand_name, data.city);
      setGeneratedReview(initialReview);
    }
    setLoading(false);
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

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textArea);
      return Promise.resolve();
    }
  };

  const getGoogleReviewUrl = (baseUrl, rating) => {
    if (!baseUrl) return '#';
    let url = baseUrl.trim();
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    if (url.includes('writereview') || url.includes('placeid')) {
      url = url.replace(/,\d+$/, '');
      if (!url.endsWith(',' + rating)) {
        url = url + ',' + rating;
      }
    }
    return url;
  };

  const handleCopyAndPost = () => {
    if (!client || !client.google_review_link) {
      alert("Google Review link is missing for this client!");
      return;
    }
    
    // 1. Copy text to clipboard
    copyToClipboard(generatedReview);
    setCopiedAndRedirecting(true);

    // 2. Format URL
    const targetUrl = getGoogleReviewUrl(client.google_review_link, selectedStar);

    // 3. Direct navigation
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 250);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white p-4 text-center">
        <p className="text-gray-400">Client page not found.</p>
      </div>
    );
  }

  const primaryColor = client.primary_color || '#8b5cf6';
  const secondaryColor = client.secondary_color || '#ec4899';

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-6 text-white relative overflow-hidden font-sans"
      style={{
        background: `radial-gradient(circle at top, ${primaryColor}25 0%, #050505 80%)`,
        backgroundColor: '#050505'
      }}
    >
      {/* Dynamic Glow Background */}
      <div 
        className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{ backgroundColor: primaryColor }}
      />

      <main className="w-full max-w-md mx-auto relative z-10 flex-1 flex flex-col items-center justify-center py-8">
        {/* Brand Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          {client.logo_url && (
            <div className="w-24 h-24 mb-4 rounded-2xl p-3 bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center">
              <img src={client.logo_url} alt={client.brand_name} className="max-h-full max-w-full object-contain" />
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">{client.brand_name}</h1>
          <p className="text-sm text-gray-400 font-medium">{client.city ? `${client.city} • ` : ''}{client.business_type}</p>
        </div>

        {/* Rating Card */}
        <div className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-200 mb-6">How was your experience?</h2>

          {/* Star Selection */}
          <div className="flex justify-center gap-3 mb-8">
            {[3, 4, 5].map((stars) => {
              const active = selectedStar === stars;
              return (
                <button
                  key={stars}
                  onClick={() => handleStarSelect(stars)}
                  className={`flex items-center gap-1 px-4 py-3 rounded-2xl font-bold transition-all transform active:scale-95 ${
                    active 
                      ? 'scale-105 shadow-lg text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
                  }`}
                  style={{
                    backgroundColor: active ? primaryColor : undefined,
                    boxShadow: active ? `0 0 20px ${primaryColor}66` : undefined
                  }}
                >
                  <span className="text-lg">{stars}</span>
                  <Star size={18} fill={active ? '#fff' : 'none'} className={active ? 'text-white' : 'text-amber-400'} />
                </button>
              );
            })}
          </div>

          {/* Review Text Output */}
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 text-left relative group">
              <p className="text-gray-200 text-sm leading-relaxed pr-8 font-normal">"{generatedReview}"</p>
              <button 
                onClick={() => generateReview()} 
                title="Generate New Review"
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1 rounded-lg bg-white/5 hover:bg-white/10"
              >
                <RefreshCw size={14} />
              </button>
            </div>

            {/* Combined Action Button */}
            <button
              onClick={handleCopyAndPost}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-base font-bold text-white transition-all shadow-xl hover:opacity-90 active:scale-95 cursor-pointer"
              style={{
                backgroundColor: secondaryColor || primaryColor,
                boxShadow: `0 0 25px ${(secondaryColor || primaryColor)}55`
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
          </div>
        </div>
      </main>

      {/* Required Footer */}
      <footer className="py-4 text-center text-xs text-gray-500 font-medium tracking-wide z-10">
        Powered by Marketing Motion
      </footer>
    </div>
  );
}