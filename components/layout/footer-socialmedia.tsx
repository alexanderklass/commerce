import Link from 'next/link';
import React from 'react';
import { AiFillTikTok, AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';

export default function FooterSocialMedia() {
  const socialMediaElements = [
    {
      name: 'TikTok',
      link: '#',
      icon: <AiFillTikTok />,
    },
    {
      name: 'Instagram',
      link: '#',
      icon: <AiFillInstagram />,
    },
    {
      name: 'Facebook',
      link: '#',
      icon: <AiFillFacebook />,
    },
    {
      name: 'Youtube',
      link: '#',
      icon: <AiFillYoutube />,
    },
  ];

  const SocialMediaItem = ({ name, link, icon }: { name: string; link: string; icon: React.ReactNode }) => (
    <Link className={'flex flex-row justify-between gap-x-3 underline-offset-2 hover:underline'} href={link}>
      <p>{name}</p>
      <div className={'text-xl'}>{icon}</div>
    </Link>
  );

  return (
    <div className={'flex max-w-[250px] flex-col gap-y-3'}>
      <p className={'font-bold'}>Social Media</p>
      <div className={'flex flex-col gap-y-1'}>
        {socialMediaElements.map((item, i) => (
          <SocialMediaItem key={i} icon={item.icon} name={item.name} link={item.link} />
        ))}
      </div>
    </div>
  );
}
