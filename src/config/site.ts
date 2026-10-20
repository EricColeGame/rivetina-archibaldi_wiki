export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Rivetina archibaldi Wiki",
  shortName: "Rivetina archibaldi",
  logoText: "R",
  tagline: "Species Guide, Habitat & Scientific Classification",
  description: "Explore Rivetina archibaldi, a newly described praying mantis from the Zagros oak forests of western Iran, with identification, habitat, taxonomy, and research details.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rivetina-archibaldi.wiki",
  supportEmail: "support@rivetina-archibaldi.wiki",
  gameUrl: "https://doi.org/10.3897/jor.35.174839",
  heroVideoId: "YBt6s7CHFQA",
  social: {
    discord: "https://www.gbif.org/taxon/VNYLW",
    youtube: "https://www.youtube.com/watch?v=YBt6s7CHFQA",
  },
  locales: ["en", "fa", "es", "de"],
  defaultLocale: "en",
};
