export type ProjectCategory = "Social Media" | "Web Design" | "Branding" | "Videos";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  summary: string;
  url: string;
  visual: "architecture" | "wellness" | "digital" | "fitness" | "editorial" | "dental" | "entertainment" | "interior";
};

export const projects: Project[] = [
  { slug: "unisol-homes", title: "Unisol Homes", category: "Web Design", client: "Unisol", year: "2025", summary: "A property discovery experience rebuilt around clarity and speed.", url: "https://unisolhabitat.com/", visual: "architecture" },
  { slug: "dr-anudeeps-homeopathy", title: "Dr. Anudeep's Homeopathy", category: "Branding", client: "Dr. Anudeep", year: "2024", summary: "A warm, trustworthy identity for a homeopathy practice scaling across clinics.", url: "https://www.instagram.com/dr.anudeep.p/", visual: "wellness" },
  { slug: "vashishta-360", title: "Vashishta 360", category: "Social Media", client: "Vashishta", year: "2025", summary: "A weekly content system created for consistent digital reach.", url: "https://www.instagram.com/vashista360/?hl=en", visual: "digital" },
  { slug: "dhar-fitness", title: "Dhar Fitness", category: "Videos", client: "Dhar", year: "2024", summary: "A cinematic launch film for a next-generation fitness brand.", url: "https://www.instagram.com/dhar_fitness_studio/", visual: "fitness" },
  { slug: "telugu-assets", title: "Telugu Assets", category: "Web Design", client: "Telugu Assets", year: "2025", summary: "A marketing site and library built for a regional creator audience.", url: "https://www.youtube.com/@TeluguAssets", visual: "editorial" },
  { slug: "roots-dental-care", title: "Roots Dental Care", category: "Branding", client: "Roots", year: "2024", summary: "A modern dental brand designed to feel calm, caring and professional.", url: "https://www.instagram.com/rootsdentalcarehyd/", visual: "dental" },
  { slug: "4d-entertainers", title: "4D Entertainers", category: "Videos", client: "4D", year: "2025", summary: "Event highlight reels shaped for attention and re-bookings.", url: "https://www.instagram.com/4dentertainers/", visual: "entertainment" },
  { slug: "alaya-home-decor", title: "Alaya Home Decor", category: "Social Media", client: "Alaya", year: "2025", summary: "Lifestyle content that made a home decor brand a source of daily inspiration.", url: "https://www.instagram.com/alaya_homedecors/", visual: "interior" },
];

export const whatsappUrl = "https://wa.me/916302431662?text=Hello%20FlawByte%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A%0APlease%20get%20back%20to%20me.";

export const clientNames = ["Unisol", "Dr. Anudeep", "Vashishta", "4D Entertainers", "Dhar", "Telugu Assets", "Roots", "Alaya", "Ur Captures"];

export const testimonials = [
  { quote: "FlawByte reimagined our entire brand system. Our launch weekend outsold the entire previous quarter.", name: "Dr. Anudeep", role: "Founder & MD, Dr. Anudeep's Homeopathy" },
  { quote: "The reels alone paid for the retainer within a month. They just get modern audiences.", name: "4D Entertainers", role: "Major Event Partner" },
  { quote: "A rare team that ships fast without cutting corners. Design, dev, motion — all top-tier.", name: "Yugendar", role: "Founder, Ur Captures" },
];