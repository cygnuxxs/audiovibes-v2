'use server'
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { Scraper } from "youtube-search-scraper"
// export async function getSongName(formData : FormData) {
//     const songName = String(formData.get('songname') || '')
//     getSongsData(songName)
//     revalidatePath('/')
//   }

  export async function getSongsData(songName? : string) {
    try {
      cookies().delete('songname')
      const yt = new Scraper()
      const results = (await yt.search(songName || '#trendingmusic')).videos
      console.log(results)
      return results
    } catch (err) {
      return []
    } finally {
      revalidatePath('/')
    }
  }
