import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Environment variables configuration
  env: {
    BUILDER_API_KEY: process.env.BUILDER_API_KEY,
    BUILDER_MODEL: process.env.BUILDER_MODEL,
    BUILDER_PATH_URL: process.env.BUILDER_PATH_URL,
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
    NEXT_PUBLIC_BUILDER_MODEL: process.env.NEXT_PUBLIC_BUILDER_MODEL,
    NEXT_PUBLIC_BUILDER_PATH_URL: process.env.NEXT_PUBLIC_BUILDER_PATH_URL,
  },
  
  // If you need to expose environment variables to the browser,
  // prefix them with NEXT_PUBLIC_ in your .env files
  
  // Example of runtime configuration (if needed)
  // publicRuntimeConfig: {
  //   // Will be available on both server and client
  // },
  
  // serverRuntimeConfig: {
  //   // Will be available only on the server side
  // },
};

export default nextConfig;
