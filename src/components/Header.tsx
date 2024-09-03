import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full grid justify-between pt-4 pb-2 grid-flow-col">
      <p className="font-semibold text-xl">
        AudioVibes{" "}
        <Link className="text-xs font-normal hover:text-gray-400" href={"/"}>
          by Cygnuxxs
        </Link>
      </p>
      <ModeToggle />
    </div>
  );
};

export default Header;
