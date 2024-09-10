import { LinkCircle, PlayCircle, TickCircle, Timer1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Video } from "youtube-search-scraper";
import { formatViews } from "@/lib/snippets";
import DownloadTab from "./DownloadTab";

const Song: React.FC<{ song : Video }> = ({ song }) => {
  return (
    <div className="flex py-2 ht-fit gap-4 max-sm:text-xs max-md:text-sm max-sm:font-medium bg-muted dark:bg-transparent rounded-md">
      <div className="w-1/5 max-md:w-[30%] max-sm:h-[6rem] relative  justify-center items-center">
        <Image
        fill
          className="object-cover rounded-md"
          src={song.thumbnail}
          alt={song.title}
        />
        <p className="absolute text-white dark:bg-[#ffffff3a] bg-[#0004] bottom-1 right-1 rounded-md px-1 py-0 font-normal w-fit text-sm max-sm:text-xs">
          {song.duration_raw}
        </p>
      </div>
      <div className="w-4/5 flex flex-col h-full max-md:w-[70%]">
        <p className="font-medium">{song.title}</p>
        <div
          className={`grid md:grid-flow-col max-md:grid-cols-2 w-fit py-2 items-center text-sm max-sm:text-xs text-muted-foreground gap-x-4 gap-y-2`}
        >
          <Link
            className="flex flex-none rounded-md px-1 items-center h-fit w-fit hover:text-primary"
            href={song.channel.link}
          >
            {song.channel.name}
            {song.channel.verified ? (
              <TickCircle className="ml-1 text-primary" variant="Bold" size={14} />
            ) : (
              ""
            )}
          </Link>
          <p className="flex flex-none rounded-md px-1 items-center h-fit w-fit">
          <Timer1 className="mr-1 text-primary" size={16} variant="Bold" />
            {song.uploaded}
          </p>
          <p className="flex w-fit items-center rounded-md px-1">
          <PlayCircle className="mr-1 text-primary" size={16} variant="Bold" />
            {formatViews(song.views)}{" "}
          </p>
          <Link
            className="flex flex-none items-center rounded-md px-1 h-fit w-fit hover:text-primary"
            href={song.shareLink}
          >
            <LinkCircle className="mr-1 text-primary" size={16} variant="Bold" />
            YT Link
          </Link>
        </div>
        <DownloadTab songName = {song.title} songLink = {song.link} />
      </div>
    </div>
  );
};

export default Song;
