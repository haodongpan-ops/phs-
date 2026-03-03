import React from 'react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '../constants';

const Products = () => {
  const { t } = useTranslation();

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('products.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.nameKey}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={`https://picsum.photos/seed/${product.nameKey.split('.')[1] || 'tech'}/600/400`} 
                  alt={t(product.nameKey)} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-8 w-8 text-blue-600">{product.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 flex-1">{t(product.nameKey)}</h3>
                </div>
                <div className="pl-12">
                    <p className="mt-2 text-blue-600 font-semibold">{t(product.applicationKey)}</p>
                    <p className="mt-4 text-sm text-slate-500">
                        <span className="font-semibold">{t('products.expansion_prefix')}</span> {t(product.expansionKey)}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
