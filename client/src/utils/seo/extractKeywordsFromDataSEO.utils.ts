function extractKeywordsFromDataSEO_Utils(keywordsObject: Record<number, string>): string[] {
  return Object.values(keywordsObject)
    .filter((kw) => kw.trim() !== "")
    .map((kw) => kw.trim());
}

export { extractKeywordsFromDataSEO_Utils };
