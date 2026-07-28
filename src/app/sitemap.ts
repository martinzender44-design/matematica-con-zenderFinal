import type { MetadataRoute } from "next";
import { SEO } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO.url + SEO.path,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
