'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  const mapping = 'pathname';
  const reactionsEnabled = '1';
  const emitMetadata = '0';
  const inputPosition = 'top';
  const lang = 'en';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes() || !repo || !repoId || !category || !categoryId) {
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
        while (ref.current?.firstChild) {
            ref.current.removeChild(ref.current.firstChild);
        }
    };
  }, [repo, repoId, category, categoryId, mapping, reactionsEnabled, emitMetadata, inputPosition, lang, resolvedTheme]);


  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    if (iframe) {
        iframe.contentWindow?.postMessage({ giscus: { setConfig: { theme: resolvedTheme === 'dark' ? 'dark' : 'light' } } }, 'https://giscus.app');
    }
  }, [resolvedTheme]);

  if (!repo || !repoId || !category || !categoryId) {
    return (
        <div className="text-center text-muted-foreground mt-16">
            <p>Commenting is not configured.</p>
            <p className="text-sm">Please set the Giscus environment variables to enable comments.</p>
        </div>
    );
  }

  return <section ref={ref} className="mt-16" />;
}
