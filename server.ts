// server.ts

import { NextConfig } from "next";
import NextServer from "next/dist/server/next-server";
// @ts-ignore
import { config } from "./.next/required-server-files.json";
import serverless from "serverless-http";

const nextServer = new NextServer({
  hostname: "localhost",
  port: 3000,
  dir: __dirname,
  dev: false,
  conf: {
    ...(config as NextConfig),
  },
});

export const handler = serverless(nextServer.getRequestHandler(), {
  binary: ["*/*"],
});
