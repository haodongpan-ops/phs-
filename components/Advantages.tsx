import React from 'react';
import { useTranslation } from 'react-i18next';
import { ADVANTAGES } from '../constants';

const Advantages = () => {
    const { t } = useTranslation();
    return (
        <section id="why-us" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('advantages.title')}</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        {t('advantages.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {ADVANTAGES.map(advantage => (
                        <div key={advantage.titleKey} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="bg-blue-100 rounded-full p-4">
                                    {advantage.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{t(advantage.titleKey)}</h3>
                            <p className="text-slate-600">{t(advantage.descriptionKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
