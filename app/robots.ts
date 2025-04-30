import { baseUrl } from 'lib/utils';
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
