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
      className={"text-gray-500 underline uppercase underline-offset-2"}
      href={URL}
    >
      {collectionTitle}
    </Link>
  );
}
