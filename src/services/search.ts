import type { VerseType } from '../types/verse'

const searchApiUrl = "http://localhost:8000/search"

export const searchVerses = async (
  query: string, 
  filters?: {
    testament?: string,
    book?: string | null,
    chapter?: number | null,
    items?: number | null,
  }
): Promise<VerseType[]> => {
  try {
    const params = new URLSearchParams()
    params.append('query', query)

    if (filters) {
      if (filters.testament) params.append('testament', filters.testament)
      if (filters.book) params.append('book', filters.book)
      if (filters.chapter !== undefined && filters.chapter !== null) {
        params.append('chapter', filters.chapter.toString())
      }
      if (filters.items !== undefined && filters.items !== null) {
        params.append('top_k', filters.items.toString())
      }
    }

    const response = await fetch(`${searchApiUrl}?${params.toString()}`)

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