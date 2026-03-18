import { client } from "@/sanity/client";

/**
 * Safely fetch from Sanity — returns null if Sanity is not configured
 * or the query fails. Pages use fallback data when this returns null.
 */
export async function safeFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await client.fetch<T>(query, params ?? {});
    return data ?? null;
  } catch {
    return null;
  }
}
