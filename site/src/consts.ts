import type { Metadata, Site, MenuItem } from "@types";

export const SITE: Site = {
  TITLE: "Bond Reviews",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "bond@bsgb.nl",
  NUM_POSTS_ON_HOMEPAGE: 15,
  NUM_REVIEWS_ON_HOMEPAGE: 15,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const REVIEWS: Metadata = {
  TITLE: "Reviews",
  DESCRIPTION: "A collection of reviews",
};

export const MENU: MenuItem[] = [
  { TITLE: "Home", HREF: "../" },
  { TITLE: "Reviews", HREF: "/reviews" },
];
