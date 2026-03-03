import React from 'react';
import { useTranslation } from 'react-i18next';

const Technology = () => {
    const { t } = useTranslation();
    return (
        <section id="technology" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('technology.title')}</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        {t('technology.subtitle')}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="https://picsum.photos/seed/laboratory/600/400" alt="Precision Imaging Hardware" className="rounded-xl shadow-lg w-full" referrerPolicy="no-referrer" />
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                             <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('technology.heading')}</h3>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                                {t('technology.p1')}
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                {t('technology.p2')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
