import React from "react";
import { Button } from "./ui/button";
import { downloadSong } from "@/lib/actions";

const DownloadTab: React.FC<{ songLink: string, songName : string }> = ({ songLink, songName }) => {
  return (
    <form action={downloadSong}>
      <input readOnly name="songlink" type="text" hidden value={songLink} />
      <input readOnly name="songname" type="text" hidden value={songName} />
      <Button
        type="submit"
        className="mt-auto w-fit text-xs"
        variant={"default"}
      >
        Download MP3
      </Button>
    </form>
  );
};

export default DownloadTab;
