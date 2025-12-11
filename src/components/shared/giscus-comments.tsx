'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // This is a placeholder. Replace with your actual Giscus config.
  // You can get these values from the Giscus app homepage.
  const repo = 'YOUR_GITHUB_REPO'; // e.g., 'user/repo'
  const repoId = 'YOUR_REPO_ID';
  const category = 'YOUR_CATEGORY_NAME'; // e.g., 'Announcements'
  const categoryId = 'YOUR_CATEGORY_ID';
  const mapping = 'pathname';
  const reactionsEnabled = '1';
  const emitMetadata = '0';
  const inputPosition = 'top';
  const lang = 'en';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', reactionsEnabled);
    script.setAttribute('data-emit-metadata', emitMetadata);
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-lang', lang);
    script.setAttribute('data-theme', resolvedTheme === 'dark' ? 'dark' : 'light');

    ref.current.appendChild(script);

    return () => {
        // Clean up the script when the component unmounts
        // to avoid issues with hot-reloading in development.
        while (ref.current?.firstChild) {
            ref.current.removeChild(ref.current.firstChild);
        }
    };
  }, [repo, repoId, category, categoryId, mapping, reactionsEnabled, emitMetadata, inputPosition, lang, resolvedTheme]);


  // Update giscus theme when the app theme changes
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (iframe) {
        iframe.contentWindow?.postMessage({ giscus: { setConfig: { theme: resolvedTheme === 'dark' ? 'dark' : 'light' } } }, 'https://giscus.app');
    }
  }, [resolvedTheme]);


  return <section ref={ref} className="mt-16" />;
}
