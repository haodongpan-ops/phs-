import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { findSolution } from '../services/geminiService';
import { useToast } from '../context/ToastContext';

const SmartFinder = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [inputError, setInputError] = useState('');
  const { showToast } = useToast();

  const handleFindSolution = useCallback(async () => {
    if (!query.trim()) {
      setInputError(t('smartFinder.error_empty'));
      return;
    }

    setIsLoading(true);
    setInputError('');
    setResult('');

    try {
      const response = await findSolution(query);
      setResult(response);
    } catch (err) {
      const errorMessage = t('smartFinder.error_api', { message: err instanceof Error ? err.message : 'An unexpected error occurred.'});
      // Use global toast for prominent error display
      showToast(errorMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  }, [query, t, showToast]);

  const renderResult = () => {
    if (!result) return null;
    
    const parts = result.split(':');
    if (parts.length < 2) {
      return <p className="text-slate-700">{result}</p>;
    }
    
    const productName = parts[0].trim();
    const explanation = parts.slice(1).join(':').trim();

    return (
      <div>
        <p className="text-slate-500 text-sm">{t('smartFinder.ai_recommends')}</p>
        <p className="text-2xl font-bold text-blue-600">{productName}</p>
        <p className="text-slate-700 mt-2">{explanation}</p>
      </div>
    );
  };

  return (
    <section id="ai-finder" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('smartFinder.title')}</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          {t('smartFinder.subtitle')}
        </p>
        
        <div className="max-w-2xl mx-auto mt-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (inputError) setInputError('');
              }}
              placeholder={t('smartFinder.placeholder')}
              className={`flex-grow bg-white border ${inputError ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-500'} text-slate-900 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none transition`}
              disabled={isLoading}
              onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isLoading) {
                      handleFindSolution();
                  }
              }}
            />
            <button
              onClick={handleFindSolution}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('smartFinder.analyzing')}
                </>
              ) : (
                t('smartFinder.button')
              )}
            </button>
          </div>
          
          {inputError && (
              <p className="text-red-500 text-sm mt-2 text-left ml-1">{inputError}</p>
          )}

          {result && (
            <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 text-left shadow-lg">
                {renderResult()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartFinder;