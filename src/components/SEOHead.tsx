import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterImage?: string;
  schema?: object;
  publishedTime?: string;
  author?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterImage,
  schema,
  publishedTime,
  author,
}: SEOHeadProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to set meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Standard meta tags
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    if (author) setMeta("author", author);
    if (publishedTime) setMeta("article:published_time", publishedTime);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonical || "https://venkoweddingplanners.com/", true);
    setMeta("og:image", ogImage, true);
    setMeta("og:site_name", "Venko Wedding Planners", true);
    setMeta("og:locale", "en_IN", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", twitterImage || ogImage);
    setMeta("twitter:site", "@venkowedding");
    setMeta("twitter:creator", "@venkowedding");

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Remove existing JSON-LD schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-seo]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add custom schema if provided
    if (schema) {
      const schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.setAttribute("data-seo", "true");
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, twitterImage, schema, publishedTime, author]);

  return null;
};

export default SEOHead;
