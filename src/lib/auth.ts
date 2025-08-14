import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema, // or "pg" or "mysql"
  }),
  user: {
    modelName: "userTable",
  },
  account: {
    modelName: "accountTable",
  },
  session: {
    modelName: "sessionTable",
  }, //usar modelNames caso o nome da tabela seja alterada ao colocar tabela de authenticação
  //dentro da tabela principal de dados
});
