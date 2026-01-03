
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-lg font-bold text-gray-900">Veles Digital</div>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest">Kreativni studio</p>
          </div>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Politika zasebnosti</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Pogoji uporabe</a>
            <a href="mailto:studio@veles.digital" className="hover:text-gray-900 transition-colors">Kontakt</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-50 text-center md:text-left">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Veles Digital. Vse pravice pridržane. Profesionalne storitve za digitalno odličnost.
          </p>
        </div>
      </div>
    </footer>
  );
};
