import { Instagram, Mail, MapPin, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants/links-footer";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-6 border-t pt-5">
      <Image src="/Logo.svg" alt="logo" width={100} height={32} />

      <div className="grid grid-cols-3 gap-x-6 gap-y-2">
        {LINKS.map((link) => (
          <Link className="text-gray-400" href="/" key={link.id}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-5">
        <Link href="/">
          <Instagram className="text-gray-400" />
        </Link>
        <Link href="/">
          <Mail className="text-gray-400" />
        </Link>
        <Link href="/">
          <PhoneIcon className="text-gray-400" />
        </Link>
        <Link href="/">
          <MapPin className="text-gray-400" />
        </Link>
      </div>
      <div className="flex flex-col items-start bg-stone-800 w-full p-5">
        <p className="text-white font-bold text-sm">© 2025 Copyright Nice</p>
        <p className="text-gray-400 text-sx">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
