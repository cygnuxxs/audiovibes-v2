import Header from "@/components/Header";
import SongResults from "@/components/SongResults";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { getSongsData } from "@/lib/actions";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { defaultSongsData } from "@/lib/snippets";
import React from "react";
import { Video } from "youtube-search-scraper";

const Homepage = async () => {
  const placeholders = [
    "Search for your favourite songs",
    "You can also use Video ID.",
    "Paste the Youtube Link for the song.",
  ];
  let songsData : Video[] = []
  const songname = cookies().get('songname')?.value || null
  if (songname) {
    songsData = await getSongsData(songname)
  } else {
    songsData = await getSongsData()
  }
  return (
    <div className="bg-muted w-screen flex items-center justify-center max-sm:p-2 h-svh">
      <div className="bg-background flex flex-col shadow-xl dark:shadow-none border dark:border-0 px-4 max-sm:w-full w-4/5 max-sm:h-full h-[95%] rounded-xl">
        <Header />
        <form className="mb-3"
          action={async (formData : FormData) => {
            'use server'
            const songName = String(formData.get('songname') || '')
            cookies().set('songname', songName)
            revalidatePath('/')
          }}
        >
          <PlaceholdersAndVanishInput placeholders={placeholders} />
        </form>
        <SongResults songs={defaultSongsData} />
        </div>
    </div>
  );
};

export default Homepage;
