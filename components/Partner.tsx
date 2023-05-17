import Image from "next/image";
import React, { FC } from "react";

type Props = {
  name: string;
};
const Partner: FC<Props> = ({ name }) => {
  return (
    <a
      className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-center align-middle items-center"
      href={`https://www.instagram.com/${name}`}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        src={`/partners/${name}.jpeg`}
        className="h-16 w-16 rounded-full"
        alt={`${name}`}
        width={64}
        height={64}
      />
      <div className="font-medium text-accent text-xs mt-4">@{name}</div>
    </a>
  );
};

export default Partner;
