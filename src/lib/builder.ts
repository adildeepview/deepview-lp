import { builder } from '@builder.io/react';

// Initialize Builder.io with your API key
console.log('Builder API Key:', process.env.NEXT_PUBLIC_BUILDER_API_KEY);
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'cabf97a1cbd549c79b5c53b6e1f731d6');

export default builder;
