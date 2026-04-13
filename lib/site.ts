const fallbackSiteUrl = "https://aloktripathi1.github.io/portfolio";

const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubRepo = process.env.GITHUB_REPOSITORY?.split("/")[1];

const defaultSiteUrl = githubOwner && githubRepo
  ? `https://${githubOwner}.github.io/${githubRepo}`
  : fallbackSiteUrl;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
