// app/ui/markdown-renderer.tsx
'use client';

import { marked } from 'marked';
import { useState, useEffect } from 'react';

interface MarkdownRendererProps {
        markdownContent: string;
        
    }

export default function MarkdownRenderer({ markdownContent }: MarkdownRendererProps) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function parseMarkdown() {
      const parsedHtml = await marked.parse(markdownContent);
      setHtmlContent(parsedHtml);
    }
    parseMarkdown();
  }, [markdownContent]);

  return (
    <article dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose"/>
  );
}