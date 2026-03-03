import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
    const { t } = useTranslation();
    return (
        <section id="contact-page" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('contact.title')}</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    {t('contact.subtitle')}
                </p>
                <div className="mt-10">
                    <a 
                        href="mailto:contact@poweracuity.com" 
                        className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-transform duration-300 bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 text-lg"
                    >
                        {t('contact.cta')} (contact@poweracuity.com)
                    </a>
                </div>
                 <p className="mt-6 text-slate-500">{t('footer.inquiry')}</p>
            </div>
        </section>
    );
};

export default ContactPage;
