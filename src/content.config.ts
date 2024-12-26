import { defineCollection, z } from "astro:content";

if (!import.meta.env.GOOGLE_SHEET_APP_URL.startsWith('https')) {
  throw new Error("GOOGLE_SHEET_APP_URL not set at build time")
}

const paragraphs = defineCollection({
  loader: async () => {
    const response = await fetch(`${import.meta.env.GOOGLE_SHEET_APP_URL}?s=Paragraphs`);
    const data = await response.json();

    console.log(data);

    return data.map((paragraph: any, index: number) => ({
      id: index.toString(),
      ...paragraph,
    }));
  },
  schema: z.object({
    english: z.string(),
    spanish: z.string(),
  }),
})

export const collections = {
  'paragraphs': paragraphs,
};