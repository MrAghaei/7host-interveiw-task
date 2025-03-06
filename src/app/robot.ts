import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const BASE_URL = "https://7hostinterviewtask.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/currencies"],
      disallow: [],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
