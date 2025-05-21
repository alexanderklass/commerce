import Link from "next/link";
export default function FooterSocialMedia() {
  const socialMedia = [
    {
      name: "TikTok",
      link: "#",
    },
    {
      name: "Instagram",
      link: "#",
    },
    {
      name: "Facebook",
      link: "#",
    },
    {
      name: "Youtube",
      link: "#",
    },
  ];

  const SocialMediaItem = ({ name, link }: { name: string; link: string }) => (
    <Link href={link}>{name}</Link>
  );

  return (
    <div className={"flex max-w-[250px] flex-col gap-y-3"}>
      <p className={"font-bold"}>Social Media</p>
      <div className={"flex flex-col gap-y-1"}></div>
    </div>
  );
}
