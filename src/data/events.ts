export type NocturneEvent = {
  id: string;
  title: string;
  date: string;
  venue: string;
  lineup: string[];
  desktopImage: string;
  mobileImage?: string;
  ticketUrl?: string;
  imagePosition?: string;
};

export const events: NocturneEvent[] = [
  {
    id: "hard-dnb-2026",
    title: "HARD DNB",
    date: "2026-11-13",
    venue: "Bad Decisions, Fitzroy",
    lineup: ["Asteria", "HLDUBZ", "Phoenix", "Stackpackers", "Strafe", "UP2"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_hard_dnb_november_2026-desktop.jpg",
    mobileImage:
      "/img/raves-artwork/mobile/nocturne_hard_dnb_november_2026-mobile.jpg",
    ticketUrl: "https://nocturne-hard-dnb-13-nov-26.eventbrite.com.au/",
  },
  {
    id: "skepsis-and-stackpackers",
    title: "Skepsis & Stackpackers",
    date: "2026-05-22",
    venue: "Sub Club, Melbourne",
    lineup: ["Skepsis", "Stackpackers", "Hallox", "DailyMayo", "Tsukiyoma"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_skepsis_stackpackers_may_2026-desktop.jpg",
  },
  {
    id: "electropolis-halloween-edition",
    title: "Electropolis: Halloween Edition",
    date: "2025-10-31",
    venue: "QQQ, Melbourne",
    lineup: [
      "DailyMayo b2b Stackpackers",
      "Archive b2b George Giamoukoglou",
      "Asymmetrik b2b ZS-2000",
      "Enyo b2b NIIX",
      "Hallox b2b Tsukiyoma",
      "Rex the Bard b2b Strafe",
    ],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_electropolis_halloween_october_2025-desktop.jpg",
  },
  {
    id: "electropolis-dark-liquid-edition",
    title: "Electropolis: Liquid and Dark Drum and Bass Edition",
    date: "2025-07-18",
    venue: "QQQ, Melbourne",
    lineup: ["Stackpackers", "Aaron Static", "Helix", "Bry", "Enyo", "J-Slyde"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_electropolis_liquid_july_2025-desktop.jpg",
  },
  {
    id: "basstripper",
    title: "Basstripper",
    date: "2025-05-23",
    venue: "Sub Club, Melbourne",
    lineup: [
      "Basstripper",
      "Stackpackers b2b Fagan",
      "Domain",
      "Memery",
      "ZS-2000",
    ],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_basstripper_may_2025-desktop.jpg",
  },
  {
    id: "dux-n-bass",
    title: "Dux n Bass",
    date: "2025-02-07",
    venue: "Laundry, Melbourne",
    lineup: [
      "DUX",
      "Stackpackers",
      "Aaron Static",
      "NattyNat",
      "Clickbait",
      "Strafe",
      "Fagan",
    ],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_duxnbass_february_2025-desktop.jpg",
  },
  {
    id: "captainbass",
    title: "Captain Bass",
    date: "2024-10-25",
    venue: "Bass Lounge, Melbourne",
    lineup: ["Captain Bass", "Stackpackers"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_captainbass_october_2024-desktop.jpg",
  },
  {
    id: "qzb",
    title: "QZB",
    date: "2024-10-04",
    venue: "Bass Lounge, Melbourne",
    lineup: ["QZB", "Stackpackers"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_qzb_october_2024-desktop.jpg",
  },
  {
    id: "crucast",
    title: "CruCast",
    date: "2024-08-30",
    venue: "New Guernica, Melbourne",
    lineup: [
      "Skepsis",
      "Darkzy",
      "Amplify",
      "Gina",
      "Lazcru",
      "MC AD",
      "B.O.M",
      "Stackpackers",
      "Substitute",
      "Monkee",
    ],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_crucast_august_2024-desktop.jpg",
  },
  {
    id: "eden-festival",
    title: "Eden Festival",
    date: "2024-07-26",
    venue: "Darwin, Northern Territory",
    lineup: ["Stackpackers"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_eden_july_2024-desktop.jpg",
  },
  {
    id: "house-of-sin",
    title: "House of Sin",
    date: "2024-07-12",
    venue: "Laundry, Melbourne",
    lineup: [
      "Sammythesinner",
      "Stackpackers",
      "Kritikal",
      "Clickbait",
      "Domain",
    ],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_houseofsin_july_2024-desktop.jpg",
  },
  {
    id: "flowidus-and-blckout",
    title: "Flowidus and Blkout.",
    date: "2024-05-24",
    venue: "Laundry, Melbourne",
    lineup: ["Flowidus", "Blkout", "Stackpackers"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_flowidusblkout_may_2024-desktop.jpg",
  },
  {
    id: "bom-and-yussi",
    title: "B.O.M and Yussi",
    date: "2024-04-12",
    venue: "Laundry, Melbourne",
    lineup: ["B.O.M", "Yussi", "Stackpackers"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_bomyussi_april_2024-desktop.jpg",
  },
  {
    id: "turno-gray-subzero-dreps",
    title: "Turno and Dreps: Game Time ft Special Guests Sub Zero and Gray",
    date: "2024-02-11",
    venue: "Bourke St Courtyard, Melbourne",
    lineup: ["Turno", "Dreps", "Gray", "Sub Zero"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_turno_february_2024-desktop.jpg",
  },
  {
    id: "keeno",
    title: "Keeno",
    date: "2022-07-10",
    venue: "HooHaa, Melbourne",
    lineup: ["Keeno", "Stackpackers"],
    desktopImage:
      "/img/raves-artwork/desktop/nocturne_keeno_july_2022-desktop.jpg",
  },
];
