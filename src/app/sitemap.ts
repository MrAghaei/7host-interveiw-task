export default async function sitemap() {
  const BASE_URL = "https://7hostinterviewtask.vercel.app";
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `BASE_URL/currencies`,
      lastModified: new Date(),
    },
  ];
}
