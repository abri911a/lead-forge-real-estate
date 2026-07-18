import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
  image?: string;
}

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const SeoHead = ({
  title,
  description,
  canonical,
  type = "website",
  image = "https://waleedproperty.com/og-image.jpg",
}: SeoHeadProps) => {
  useEffect(() => {
    const applyHead = () => {
      document.title = title;

      document.head.querySelectorAll('link[rel="canonical"]').forEach((link) => link.remove());
      const canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonical);
      document.head.appendChild(canonicalLink);

      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:title"]', "property", "og:title", title);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[property="og:url"]', "property", "og:url", canonical);
      setMeta('meta[property="og:type"]', "property", "og:type", type);
      setMeta('meta[property="og:image"]', "property", "og:image", image);
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
      setMeta('meta[name="twitter:url"]', "name", "twitter:url", canonical);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    };

    applyHead();
    const timer = window.setTimeout(applyHead, 0);

    return () => window.clearTimeout(timer);
  }, [canonical, description, image, title, type]);

  return null;
};

export default SeoHead;