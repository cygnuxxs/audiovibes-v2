import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Video } from "youtube-search-scraper";

const Song: React.FC<{ song: Video }> = ({ song }) => {
  return (
    <div className="flex gap-4 max-sm:text-xs max-sm:font-medium">
      <div className="w-1/5 max-sm:w-2/5 relative justify-center items-center">
        <Image
          width={180}
          height={180}
          className="object-cover rounded-md"
          src={song.thumbnail}
          alt={song.title}
        />
        <p className="absolute text-white dark:bg-[#ffffff3a] bg-[#0004] bottom-1 right-1 rounded-md px-1 py-0 font-normal w-fit text-sm max-sm:text-xs">
          {song.duration_raw}
        </p>
      </div>
      <div className="w-4/5 max-sm:w-3/5">
        <p>{song.title}</p>
        <Link className="text-muted-foreground text-sm max-sm:text-xs hover:text-primary" href={song.channel.link}>{song.channel.name}</Link>
      </div>
    </div>
  );
};

export default Song;
