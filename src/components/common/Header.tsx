"use client";

import { AlignJustify, LogIn, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/Logo.svg" alt="Logo Nice" width={79} height={44} />
      </Link>
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <AlignJustify size={36} color="white" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            {session?.user ? (
              <>
                <div className="flex flex-col space-y-6 px-5">
                  <div className="flex items-center justify-start gap-2">
                    <Avatar className="h-11 w-11">
                      <AvatarImage
                        src={session?.user?.image as string | undefined}
                      />
                      <AvatarFallback>
                        {session?.user?.name?.split(" ")[0][0]}
                        {session?.user?.name?.split(" ")[1][0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h2 className="font-bold">{session?.user?.name}</h2>
                      <span className="text-xs text-gray-500">
                        {session?.user?.email}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="justify-start text-left"
                    onClick={() => authClient.signOut()}
                  >
                    Sair da conta <LogOutIcon />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between p-5">
                  <h2>Olá, faça seu login!</h2>
                  <Button variant="ghost" asChild>
                    <Link
                      href="/authentication"
                      className="flex items-center justify-center gap-1 rounded-2xl"
                    >
                      Login <LogIn />
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
