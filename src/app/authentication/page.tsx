import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignIn from "./components/sign-in-form";
import SignUp from "./components/sign-up-form";

const Authentication = async () => {
  return (
    <>
      <Header />
      <div className="flex w-full max-w-md flex-col gap-6 p-5">
        <Tabs defaultValue="sign-in">
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
        <Button asChild className="h-10 w-10 rounded-full">
          <Link href="/">
            <ArrowLeft />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Authentication;
