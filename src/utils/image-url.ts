// utils/image-url.ts
export function getStrapiImageUrl(documentId: string, ext: string = "webp") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/${documentId}.${ext}`;
}
