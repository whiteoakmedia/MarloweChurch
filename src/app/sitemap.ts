import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marloweag.org";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/im-new`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/our-leadership`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kids`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/youth`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/our-beliefs`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/events`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/sermons`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/royal-rangers-girls-ministries`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
