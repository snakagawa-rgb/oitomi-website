'use client';

import { logCatalogDownload } from '@/lib/gtag';

interface DownloadButtonProps {
  url: string;
  productId: string;
  productName: string;
}

export default function DownloadButton({ url, productId, productName }: DownloadButtonProps) {
  const handleDownload = () => {
    // Log analytics event
    logCatalogDownload(productId, productName, url);
    
    // Open PDF in new tab
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded hover:bg-charcoal/90 transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>PDFをダウンロード</span>
    </button>
  );
}