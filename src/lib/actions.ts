'use server'
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { Scraper } from "youtube-search-scraper"
import ytdl from "@distube/ytdl-core"

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

  export async function downloadSong(formData : FormData) {
    const songUrl = String(formData.get('songlink'))
    const songName = String(formData.get('songname'))
    try {
      const stream = ytdl(songUrl, {
        quality : 'highestaudio',
        filter : 'audioonly'
      })
      const info = await ytdl.getInfo(songUrl)
      const readableStream = new ReadableStream({
        start(controller) {
          stream.on('data', (chunk: Uint8Array) => {
            controller.enqueue(chunk);
          });
  
          stream.on('end', () => {
            controller.close();
          });
  
          stream.on('error', (error) => {
            controller.error(error);
          });
        }
      });
      
    } catch (err) {
      console.error(err)
    }
  }
