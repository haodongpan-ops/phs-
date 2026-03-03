import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative py-20 md:py-32 hero-gradient overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              <Trans i18nKey="hero.title">
                Precision Micro-Vision · <span className="text-blue-600">Intelligent</span> Insight
              </Trans>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto md:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/solutions"
                className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-300 bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1"
              >
                {t('hero.cta_solutions')}
              </Link>
              <Link
                to="/technology"
                className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-300 bg-slate-700 hover:bg-slate-800 transform hover:-translate-y-1"
              >
                {t('hero.cta_tech')}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_Jiao_Tong_University_Gate.jpg" 
                alt="Shanghai Jiao Tong University Gate" 
                className="w-full aspect-video object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
