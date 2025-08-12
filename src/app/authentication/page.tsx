import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignIn from "./components/sign-in-form";
import SignUp from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        <Image 
          src='./Logo.svg'
          alt="logo"
          width={80}
          height={30}
        />
        <TabsList>
          <TabsTrigger value="sign-in">Login</TabsTrigger>
          <TabsTrigger value="sign-up">Cadastre-se</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignIn />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authentication;
