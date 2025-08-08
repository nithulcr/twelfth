'use client';

import Link from 'next/link';
import {
  Instagram,
  Mail,
  MessageCircleMore,
  Phone,
} from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.instagram.com/terrah.tech/',
    label: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://api.whatsapp.com/send?phone=7356011824',
    label: 'WhatsApp',
    Icon: MessageCircleMore,
  },
  {
    href: 'mailto:terrahconnects@gmail.com',
    label: 'Gmail',
    Icon: Mail,
  },
  {
    href: 'tel:7356011824',
    label: 'Phone',
    Icon: Phone,
  },

];

export default function StickySocial() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-60 flex flex-col w-[140px]">
      {socialLinks.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#ffffff2e] backdrop-blur-sm flex items-center  text-white font-semibold text-lg transform translate-x-[105px] md:hover:translate-x-0 transition-transform duration-700 "
        >
          <div className=" p-2 ">
            <Icon size={20} strokeWidth={1} />
          </div>
          <span className="uppercase text-sm font-light">{label}</span>
        </Link>
      ))}
    </div>
  );
}
