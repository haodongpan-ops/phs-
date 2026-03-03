import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('about.title')}</h2>
                <div className="mt-4 mb-6 h-1 w-24 bg-blue-600"></div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  <Trans i18nKey="about.p1">
                    Our name, <strong className="text-slate-900">PowerAcuity</strong>, embodies our core philosophy. 'Power' signifies our commitment to strong performance and efficiency, while 'Acuity' reflects the sharpness of vision and thought that defines our technology.
                  </Trans>
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  <Trans i18nKey="about.p2">
                    With deep technological roots originating from the prestigious <strong className="text-blue-600">Shanghai Jiao Tong University</strong>, we are founded on a bedrock of academic excellence and a relentless drive for innovation.
                  </Trans>
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {t('about.p3')}
                </p>
            </div>
            <div className="p-8 bg-slate-100 rounded-xl">
              <img src="https://picsum.photos/seed/university/600/400" alt="Shanghai Jiao Tong University Campus" className="rounded-lg shadow-md w-full h-auto" referrerPolicy="no-referrer" />
              <p className="text-center mt-4 text-sm text-slate-500">{t('about.caption')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
