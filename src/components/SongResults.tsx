import React from "react";
import { Video } from "youtube-search-scraper";
import Song from "./Song";

const SongResults: React.FC<{ songs: Video[] }> = ({ songs }) => {
  return (
    <div className="h-full overflow-y-scroll mb-3">
        <div className="max-h-fit grid gap-4">
        {songs.map((song, idx) => (
        <Song song={song} key={idx} />
      ))}
        </div>
    </div>
  );
};

export default SongResults;
