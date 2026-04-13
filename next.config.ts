import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPagesRepo =
  !!repositoryOwner &&
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const basePath =
  isGithubActions && repositoryName && !isUserPagesRepo
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {},
};

export default withContentlayer(nextConfig);
