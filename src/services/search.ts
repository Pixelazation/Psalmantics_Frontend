import type { VerseType } from '../types/verse'

const searchApiUrl = "http://localhost:8000/search"

export const searchVerses = async (query: string): Promise<VerseType[]> => {
  try {
    const response = await fetch(`${searchApiUrl}?query=${encodeURIComponent(query)}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error("Search error:", error)
    return []
  }
}