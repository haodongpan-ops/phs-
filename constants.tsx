import React from 'react';

export const NAV_LINKS = [
  { nameKey: 'header.home', href: '/' },
  { nameKey: 'header.solutions', href: '/solutions' },
  { nameKey: 'header.technology', href: '/technology' },
  { nameKey: 'header.about', href: '/about' },
];

export const PRODUCTS = [
  {
    nameKey: 'products.prokaryo.name',
    applicationKey: 'products.prokaryo.application',
    expansionKey: 'products.prokaryo.expansion',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l.354-.354a3.75 3.75 0 0 0-5.303-5.303l-.354.353M3 21l3.75-3.75m2.871-1.287a3.75 3.75 0 1 1 5.303-5.303l.354-.353" /></svg>,
  },
  {
    nameKey: 'products.pathview.name',
    applicationKey: 'products.pathview.application',
    expansionKey: 'products.pathview.expansion',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" /></svg>,
  },
  {
    nameKey: 'products.metalux.name',
    applicationKey: 'products.metalux.application',
    expansionKey: 'products.metalux.expansion',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.65H7.926a3.375 3.375 0 0 0-3.285 2.65l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" /></svg>,
  },
  {
    nameKey: 'products.vetscan.name',
    applicationKey: 'products.vetscan.application',
    expansionKey: 'products.vetscan.expansion',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>,
  },
  {
    nameKey: 'products.agrisight.name',
    applicationKey: 'products.agrisight.application',
    expansionKey: 'products.agrisight.expansion',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>,
  },
  {
    nameKey: 'products.ecosight.name',
    applicationKey: 'products.ecosight.application',
    expansionKey: 'products.ecosight.expansion',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c.502 0 1.004-.025 1.5-.072M12 21c-.502 0-1.004-.025-1.5-.072M3 13.5c0-1.121.328-2.193.9-3.138M21 13.5c0-1.121-.328-2.193-.9-3.138m-16.2 0c.572-1.923 2.14-3.44 4.1-4.138m12 0c1.96.698 3.528 2.215 4.1 4.138M12 3v4.5m0 0c-1.528 0-2.923.38-4.2 1.05M12 7.5c1.528 0 2.923.38 4.2 1.05" /></svg>,
  },
];

export const ADVANTAGES = [
    {
        titleKey: 'advantages.synergy_title',
        descriptionKey: 'advantages.synergy_desc',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0 1 14.25 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h6.75a2.25 2.25 0 0 1 2.25 2.25v3.75m3-3v3.75m-3.75 0h3.75M9 12.75h6" /></svg>
    },
    {
        titleKey: 'advantages.platform_title',
        descriptionKey: 'advantages.platform_desc',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 12h-2.25m-1.666 5.834L15 16.5M5.25 12H3m4.227-4.227L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>
    },
    {
        titleKey: 'advantages.roots_title',
        descriptionKey: 'advantages.roots_desc',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-blue-600"><path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
    }
];
