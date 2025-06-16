function extractKeywordsFromDataSEO(keywordsObject: Record<number, string>): string[] {
  return Object.values(keywordsObject)
    .filter((kw) => kw.trim() !== "")
    .map((kw) => kw.trim());
}

export default extractKeywordsFromDataSEO;
