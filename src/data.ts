// Content for the Jackman Media portfolio.
// Mirrors the structure of the live site: Home / Work / About, with Work
// organized as disciplines -> sections -> categories (image galleries).

const W = (slug: string) => `/work/${slug}.webp`;

export const profile = {
  name: "Roman Jackman",
  studio: "Jackman Media",
  eyebrow: "Portfolio",
  homeBio:
    "A Finance major at the Villanova School of Business, with minors in Business Law & Corporate Governance and Marketing. My work lives where sports, entertainment, and brand storytelling meet — told through design.",
  aboutBio: [
    "I am a designer and creative working across brand identity, social content, graphics, and event marketing — bold visual storytelling for brands, teams, organizations, and the events that bring people together.",
    "My work centers on a clean, considered visual language — from identity packages and social campaigns to event branding, sports graphics, and short-form video. The pages that follow are a selection of recent projects.",
  ],
  headshot: W("headshot"),
};

// Program names for the scrolling marquee / credibility strip.
export const programs = [
  "Villanova Athletics",
  "Villanova Football",
  "Villanova Women's Basketball",
  "Gonzaga College High School",
  "Capitol Hoops",
  "Emerson Collective",
  "VSB Campus Orgs",
];

// A curated strip of real graphics for the home "selected work" band.
export const featured = [
  { src: W("img-4707"), label: "Villanova Football" },
  { src: W("img-4718"), label: "Villanova WBB" },
  { src: W("img-4695"), label: "Eric Dixon Tribute" },
  { src: W("img-4700"), label: "Capitol Hoops" },
  { src: W("img-4697"), label: "Gonzaga" },
  { src: W("img-4740"), label: "Campus Brands" },
];

export const homeStats = [
  { key: "Discipline", value: "Design & Visual Storytelling" },
  { key: "Focus", value: "Graphic Design · Video" },
  { key: "Based in", value: "Villanova, PA" },
  { key: "Studio", value: "Jackman Media" },
];

export const aboutMeta = [
  { key: "Based in", value: "Villanova, PA" },
  { key: "Focus", value: "Brand · Sports · Editorial" },
  { key: "Studio", value: "Jackman Media" },
  { key: "Tools", value: "Ps · Ai · Pr · Ae" },
];

export const aboutAreas = [
  "Branding & Identity",
  "Social & Content",
  "Sports Graphics",
  "Campus Organizations",
  "Conferences & Events",
  "Video / Reels",
];

export const contact = {
  email: "rjackm01@villanova.edu",
  phone: "(703) 740-6087",
  phoneHref: "tel:+17037406087",
  socials: [
    { label: "Instagram", href: "https://instagram.com/JackmanMedia" },
    { label: "TikTok", href: "https://tiktok.com/@JackmanMedia" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/roman-jac" },
  ],
};

export type Category = {
  id: string;
  title: string;
  blurb: string;
  images: string[];
};

export type Section = {
  title: string;
  blurb?: string;
  categories: Category[];
};

export type Reel = {
  title: string;
  note: string;
  src: string;
  poster: string;
};

export type Discipline = {
  id: string;
  num: string;
  title: string;
  blurb: string;
  kind: "design" | "video";
  cover: string; // card/section cover image, chosen to represent the discipline
  sections?: Section[];
  reels?: Reel[];
};

export const disciplines: Discipline[] = [
  {
    id: "graphic-design",
    num: "01",
    title: "Graphic Design",
    blurb:
      "Static design across sports and brand — built to communicate clearly and carry an identity with confidence.",
    kind: "design",
    cover: W("img-4695"),
    sections: [
      {
        title: "Sports Graphic Design",
        blurb:
          "Graphics made for athletic programs — designed to read instantly in the feed and on the big screen.",
        categories: [
          {
            id: "villanova-football",
            title: "Villanova Football",
            blurb:
              "A full-season gameday system for a top-10 FCS program — ranking posts, ticket drops, and matchday creative.",
            images: ["img-4707", "img-4711", "img-4710", "img-4712", "img-4708", "img-4709"].map(W),
          },
          {
            id: "villanova-wbb",
            title: "Villanova Women's Basketball",
            blurb:
              "Every gameday graphic for a full Big East season, plus theme nights and the promotional calendar.",
            images: [
              "img-4718", "img-4713", "img-4717", "img-4714", "img-4715",
              "img-4716", "img-4735", "img-4733", "img-4734", "img-4729",
            ].map(W),
          },
          {
            id: "gonzaga",
            title: "Gonzaga College High School",
            blurb:
              "Season-long baseball and soccer creative for a D.C. program, built around the city itself.",
            images: [
              "img-4697", "img-4705", "img-4699", "img-4703", "img-4720", "img-2155",
              "img-4702", "img-4727", "img-4722", "img-4728", "img-4704", "img-4719",
              "img-4706", "img-2160", "img-2152", "img-4698",
            ].map(W),
          },
          {
            id: "capitol-hoops",
            title: "Capitol Hoops Summer League",
            blurb:
              "Daily tournament creative for the D.C. area's summer basketball league, run at the pace of the games.",
            images: ["img-4701", "img-4700", "img-4723", "img-4726", "img-4724", "img-4725", "img-4732"].map(W),
          },
          {
            id: "high-school",
            title: "High School Programs",
            blurb:
              "Schedule releases and result graphics for D.C. area high school programs.",
            images: ["img-4730", "img-4731", "img-4721"].map(W),
          },
        ],
      },
      {
        title: "Branding Graphic Design",
        blurb:
          "Identity work for brands and organizations — logos, layouts, and collateral carried with a consistent visual voice.",
        categories: [
          {
            id: "campus-brands",
            title: "Villanova Campus Brands",
            blurb:
              "Event and identity work for student organizations at the Villanova School of Business.",
            images: [
              "img-4740", "img-4741", "img-4739", "img-4742",
              "img-4743", "img-4744", "img-4745", "img-4746",
            ].map(W),
          },
          {
            id: "eric-dixon",
            title: "Eric Dixon Tribute Set",
            blurb:
              "Two composite pieces marking Eric Dixon becoming Villanova's all-time leading scorer.",
            images: ["img-4695", "img-4696"].map(W),
          },
        ],
      },
    ],
  },
  {
    id: "video-editing",
    num: "02",
    title: "Video Editing",
    blurb: "Motion work — storytelling through videography and editing.",
    kind: "video",
    cover: "/video/interns.jpg",
    reels: [
      {
        title: "Intern program feature",
        note: "Long-form feature produced during my Emerson Collective internship",
        src: "/video/interns.mp4",
        poster: "/video/interns.jpg",
      },
      {
        title: "National Intern Day",
        note: "Vertical cut released for National Intern Day",
        src: "/video/national-intern-day.mp4",
        poster: "/video/national-intern-day.jpg",
      },
      {
        title: "Social short — first cut",
        note: "Gaming content edited for vertical social",
        src: "/video/fifa-social.mp4",
        poster: "/video/fifa-social.jpg",
      },
      {
        title: "Social short — second cut",
        note: "Alternate pacing pass on the same footage",
        src: "/video/fifa-short.mp4",
        poster: "/video/fifa-short.jpg",
      },
    ],
  },
  {
    id: "villanova-football",
    num: "03",
    title: "Villanova Football",
    blurb:
      "A full-season graphics system for Villanova Football — designed and produced any creative needed throughout the fall 2025 season.",
    kind: "design",
    cover: W("img-4707"),
    sections: [
      {
        title: "Fall 2025 Season",
        categories: [
          {
            id: "vu-fb-gallery",
            title: "Gameday System",
            blurb:
              "A navy-to-Carolina gradient pulled from the uniform, heavy condensed type, and a consistent CAA + Nike lockup.",
            images: ["img-4707", "img-4711", "img-4710", "img-4712", "img-4708", "img-4709"].map(W),
          },
        ],
      },
    ],
  },
  {
    id: "villanova-wbb-case",
    num: "04",
    title: "Villanova Women's Basketball",
    blurb:
      "A complete design package for Villanova Women's Basketball — created every gameday graphic for the entire season, as well as any other needed promotional work.",
    kind: "design",
    cover: W("img-4718"),
    sections: [
      {
        title: "2025–26 Season",
        categories: [
          {
            id: "vu-wbb-gallery",
            title: "Gameday Package",
            blurb:
              "A rigid gameday layout driven by the opponent's primary color — plus theme-night creative that breaks the template.",
            images: [
              "img-4718", "img-4713", "img-4717", "img-4714", "img-4715",
              "img-4716", "img-4735", "img-4733", "img-4734", "img-4729",
            ].map(W),
          },
        ],
      },
    ],
  },
];

export const disciplineById = (id: string) => disciplines.find((d) => d.id === id);
