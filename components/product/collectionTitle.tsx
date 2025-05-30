import React from "react";
import Link from "next/link";

type CollectionTitleProps = {
  title: string;
};

export default function CollectionTitle({ title }: CollectionTitleProps) {
  const splitTitle = title.split("|");
  const collectionTitle = splitTitle[0];
  if (!collectionTitle) return null;
  const modifiedURL = collectionTitle.trim().replace(/[\s_]+/g, "-");
  const URL = `/search/${modifiedURL.toLowerCase().trim()}`;
  return (
    <Link
      className={
        "bg-sky-100 transition-all text-sm hover:bg-sky-600 hover:text-white border font-bold px-2 py-0.5 rounded-full uppercase"
      }
      href={URL}
    >
      {collectionTitle}
    </Link>
  );
}
