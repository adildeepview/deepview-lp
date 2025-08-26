'use client';
import { useEffect, useState } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';

import builder from '../src/lib/builder';

interface BuilderContent {
  data?: {
    title?: string;
  };
  [key: string]: unknown;
}


export default function BuilderContent() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState<BuilderContent | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    builder
      .get(process.env.BUILDER_MODEL!, {
        url: process.env.BUILDER_PATH_URL,
      })
      .promise()
      .then(content => {
        setContent(content);
        setNotFound(!content);
        setIsPageLoaded(true);
        if (content?.data?.title) {
          document.title = content.data.title;
        }
      })
      .catch(err => {
        console.error('Error fetching content from Builder:', err);
      });
  }, []);


  if (notFound && !isPreviewingInBuilder) {
    return (
      <div className="my-12 lg:my-24">
        <div className="container">
          <div className="pb-6 border-b border-gray-100">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                Invalid Page Path Url Configured.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isPageLoaded) {
    // create a nice loader using tailwind
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  return (
    <div>{content && <BuilderComponent model={process.env.NEXT_PUBLIC_BUILDER_MODEL} content={content} />}</div>
  );
}
