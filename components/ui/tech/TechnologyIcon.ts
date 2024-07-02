import Vue from "~icons/devicon/vuejs";
import Vite from "~icons/devicon/vitejs";
import TS from "~icons/devicon/typescript";
import Tailwind from "~icons/devicon/tailwindcss";
import React from "~icons/logos/react";
import Java from "~icons/logos/java";
import Git from "~icons/mdi/git";
import GitHub from "~icons/mdi/github";
import ESLint from "~icons/logos/eslint";
import Docker from "~icons/logos/docker-icon";
import Redis from "~icons/devicon/redis";
import MongoDB from "~icons/devicon/mongodb";
import VSCode from "~icons/devicon/vscode";
import DigitalOcean from "~icons/devicon/digitalocean";
import NetSuite from "~icons/cib/oracle-netsuite";

export const technologyIcons = [
  {
    key: "vue",
    name: "Vue",
    component: Vue,
  },
  {
    key: "vite",
    name: "Vite",
    component: Vite,
  },
  {
    key: "typescript",
    name: "TypeScript (node, bun, deno)",
    component: TS,
  },
  {
    key: "tailwind",
    name: "Tailwind",
    component: Tailwind,
  },
  {
    key: "react",
    name: "React",
    component: React,
  },
  {
    key: "java",
    name: "Java",
    component: Java,
  },
  {
    key: "git",
    name: "Git",
    component: Git,
  },
  {
    key: "github",
    name: "GitHub",
    component: GitHub,
  },
  {
    key: "eslint",
    name: "ESLint (API)",
    component: ESLint,
  },
  {
    key: "docker",
    name: "Docker",
    component: Docker,
  },
  {
    key: "redis",
    name: "Redis",
    component: Redis,
  },
  {
    key: "mongodb",
    name: "MongoDB",
    component: MongoDB,
  },
  {
    key: "vscode",
    name: "VSCode (API)",
    component: VSCode,
  },
  {
    key: "digitalocean",
    name: "DigitalOcean (hosting)",
    component: DigitalOcean,
  },
  {
    key: "netsuite",
    name: "NetSuite",
    component: NetSuite,
  },
] as const;

export type IconKey = (typeof technologyIcons)[number]["key"];

export function getTechnologyIconByKey(key: string) {
  return technologyIcons.find((tech) => tech.key === key);
}

