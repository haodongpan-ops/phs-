import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../constants';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Power<span className="text-blue-400">Acuity</span></span>
              <span className="text-xl font-bold text-white">谱华森</span>
            </h3>
            <p className="mt-4 text-slate-400">{t('footer.slogan')}</p>
             <div className="mt-4 flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t('footer.links')}</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.nameKey}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors duration-300">{t(link.nameKey)}</Link>
                </li>
              ))}
               <li>
                  <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">{t('header.contact')}</Link>
                </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">{t('footer.contact')}</h4>
            <p className="mt-4">{t('footer.email')} <a href="mailto:contact@poweracuity.com" className="hover:text-blue-400">contact@poweracuity.com</a></p>
            <p className="mt-2 text-sm">{t('footer.inquiry')}</p>
            
            <div className="mt-6">
              <a 
                href="/api/download-html" 
                download 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                {i18n.language === 'zh' ? '下载单文件版网站 (HTML)' : 'Download Single-File HTML'}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
          <p>{t('footer.copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
