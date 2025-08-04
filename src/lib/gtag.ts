export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Check if we're in production and have a tracking ID
export const isGAEnabled = Boolean(
  typeof window !== 'undefined' &&
  GA_TRACKING_ID &&
  process.env.NODE_ENV === 'production'
);

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!isGAEnabled) return;
  
  window.gtag('config', GA_TRACKING_ID!, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (
  action: string,
  parameters?: Record<string, any>
) => {
  if (!isGAEnabled) return;
  
  window.gtag('event', action, parameters);
};

// Specific event helpers
export const logCategoryClick = (categoryId: string, categorySlug: string, categoryName: string) => {
  logEvent('category_click', {
    category_id: categoryId,
    category_slug: categorySlug,
    category_name: categoryName,
  });
};

export const logProductCardClick = (
  productId: string,
  productSlug: string,
  productName: string,
  categoryId: string
) => {
  logEvent('product_card_click', {
    product_id: productId,
    product_slug: productSlug,
    product_name: productName,
    category_id: categoryId,
  });
};

export const logCatalogDownload = (
  productId: string,
  productName: string,
  pdfUrl: string
) => {
  logEvent('cta_catalog', {
    product_id: productId,
    product_name: productName,
    pdf_url: pdfUrl,
  });
};

export const logInquirySubmit = (productId: string, productName: string) => {
  logEvent('cta_inquiry', {
    product_id: productId,
    product_name: productName,
  });
};

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: Record<string, any>[];
  }
}