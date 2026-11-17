/**
 * Clonepictures Photo Studio — single source of truth for all site content.
 * Anything in [BRACKETS] must be confirmed with the owner before launch.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com"; // TODO: live domain

export const brand = {
  name: "Clonepictures Photo Studio",
  short: "Clonepictures",
  whatsapp: "2348080363312",
  whatsappDisplay: "0808 036 3312",
  instagram: "[INSTAGRAM URL]", // TODO: confirm the studio's Instagram
  facebook: "[FACEBOOK URL]", // TODO
  tiktok: "[TIKTOK URL]", // TODO
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Clonepictures+Photo+Studio+Yaba+Ozone+Cinema",
};

export const CONFIRM = "[CONFIRM WITH OWNER]";

export const waLink = (message?: string) =>
  `https://wa.me/${brand.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const bookMessage = "Hello Clonepictures, I'd like to book a photo shoot.";

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Studio Spaces", href: "#spaces" },
  { label: "Gallery", href: "#gallery" },
  { label: "Branches", href: "#branches" },
  { label: "Policies", href: "#policies" },
  { label: "Book Now", href: "#book" },
];

/* ---------------- Hero slideshow ---------------- */
export const heroSlides = [
  { src: "/images/hero-1.jpg", alt: "A client in a sculpted red embellished gown with flowing satin", caption: "Celebration" },
  { src: "/images/hero-2.jpg", alt: "A client in a black dress with oversized white ruffle detail", caption: "Portrait" },
  { src: "/images/hero-3.jpg", alt: "A client in a red dress against a warm caramel backdrop", caption: "Portrait" },
  { src: "/images/hero-4.jpg", alt: "A client in a cream suit seated on a stool, terracotta backdrop", caption: "Studio" },
];

/* ---------------- Services ---------------- */
export const services = [
  { id: "couples", title: "Weddings, Engagements & Couples", text: "Pre-wedding, engagement and couple shoots, in studio or outdoors." },
  { id: "birthdays", title: "Birthdays & Celebrations", text: "Milestone birthdays and special occasions, from bold glam to timeless portraits." },
  { id: "family", title: "Family & Child Dedication", text: "Dedications, family portraits and generations together, relaxed and unhurried." },
  { id: "maternity", title: "Maternity", text: "Gentle, flattering maternity portraits you will treasure." },
  { id: "graduation", title: "Graduation", text: "Celebrate the achievement with confident portraits in your gown or uniform." },
  { id: "branding", title: "Personal Branding & Content", text: "Headshots and content sets for your brand, business or social media." },
  { id: "makeup", title: "Makeup & Gele Tying", text: "Professional makeup and gele tying, so you arrive camera-ready." },
  { id: "passport", title: "Passport Photos", text: "Quick, correctly sized passport and ID photos." },
  { id: "events", title: "Event Coverage", text: "Photography for your event, wherever it takes place in Lagos." },
];

/* ---------------- Pricing ---------------- */
export type Package = {
  name: string;
  tagline: string;
  price: string;
  featured?: boolean;
  rows: { label: string; value: string }[];
};
const PRICE = "₦ [price]";
export const packages: Package[] = [
  {
    name: "Basic",
    tagline: "A short, simple session",
    price: PRICE,
    rows: [
      { label: "Looks / outfits", value: "[number]" },
      { label: "Session length", value: "[minutes]" },
      { label: "Edited photos", value: "[number]" },
      { label: "Raw (unedited) photos", value: "[Yes / No]" },
      { label: "Delivery time", value: "[days]" },
    ],
  },
  {
    name: "Standard",
    tagline: "Our most booked session",
    price: PRICE,
    featured: true,
    rows: [
      { label: "Looks / outfits", value: "[number]" },
      { label: "Session length", value: "[minutes]" },
      { label: "Edited photos", value: "[number]" },
      { label: "Raw (unedited) photos", value: "[Yes / No]" },
      { label: "Delivery time", value: "[days]" },
    ],
  },
  {
    name: "Premium",
    tagline: "More looks, more time, more photos",
    price: PRICE,
    rows: [
      { label: "Looks / outfits", value: "[number]" },
      { label: "Session length", value: "[minutes]" },
      { label: "Edited photos", value: "[number]" },
      { label: "Raw (unedited) photos", value: "[Yes / No]" },
      { label: "Delivery time", value: "[days]" },
    ],
  },
];

/* ---------------- Studio spaces ---------------- */
export const spaces = [
  {
    id: "regular",
    name: "Regular Backdrop Space",
    image: "/images/space-regular.jpg",
    summary: "Seamless studio backdrops in warm terracotta, caramel, grey and white, with professional lighting. Timeless and simple.",
    bestFor: ["Portraits and headshots", "Graduation and family photos", "Classic birthday shoots", "Passport and ID photos"],
    price: "Included in package price [CONFIRM WITH OWNER]",
  },
  {
    id: "content",
    name: "Content Space",
    image: "/images/space-content.jpg",
    summary: "Styled sets with arches, curved sofas, plants and neon, designed for creative, scroll-stopping images.",
    bestFor: ["Personal branding and content creation", "Themed birthday and milestone shoots", "Pre-wedding and couple shoots", "Social media sets"],
    price: "+ ₦ [price] on top of your package",
  },
];

/* ---------------- Gallery ---------------- */
export type GalleryCat = "Portraits" | "Celebrations" | "Graduation" | "Branding" | "Content Space";
export const galleryFilters: ("All" | GalleryCat)[] = ["All", "Portraits", "Celebrations", "Graduation", "Branding", "Content Space"];
export const gallery: { src: string; alt: string; cat: GalleryCat; ratio: number }[] = [
  { src: "/images/gallery-15.jpg", alt: "Red embellished gown with sculpted satin", cat: "Celebrations", ratio: 1113 / 1500 },
  { src: "/images/gallery-12.jpg", alt: "Burgundy gown in the arched content set", cat: "Content Space", ratio: 4 / 5 },
  { src: "/images/gallery-04.jpg", alt: "Engineering graduate portrait", cat: "Graduation", ratio: 1111 / 1500 },
  { src: "/images/gallery-01.jpg", alt: "Corset top and wide-leg denim on a warm backdrop", cat: "Portraits", ratio: 1132 / 1500 },
  { src: "/images/gallery-02.jpg", alt: "Birthday glam with a crystal crown", cat: "Celebrations", ratio: 844 / 1500 },
  { src: "/images/gallery-03.jpg", alt: "Cream suit seated on a wooden chair", cat: "Branding", ratio: 1132 / 1500 },
  { src: "/images/gallery-05.jpg", alt: "Ivory dress on the curved sofa set", cat: "Content Space", ratio: 5 / 4 },
  { src: "/images/gallery-09.jpg", alt: "Black dress with white ruffle detail", cat: "Portraits", ratio: 4 / 5 },
  { src: "/images/gallery-07.jpg", alt: "Graduation gown and cap", cat: "Graduation", ratio: 4 / 5 },
  { src: "/images/gallery-06.jpg", alt: "Red dress on a caramel backdrop", cat: "Portraits", ratio: 1111 / 1500 },
  { src: "/images/gallery-13.jpg", alt: "All-black look on the cream sofa set", cat: "Content Space", ratio: 1111 / 1500 },
  { src: "/images/gallery-11.jpg", alt: "White shirt portrait on a seamless backdrop", cat: "Branding", ratio: 4 / 5 },
  { src: "/images/gallery-14.jpg", alt: "Men's native wear portrait", cat: "Portraits", ratio: 1111 / 1500 },
  { src: "/images/gallery-08.jpg", alt: "Neon-lit content set portrait", cat: "Content Space", ratio: 844 / 1500 },
  { src: "/images/gallery-10.jpg", alt: "Cream suit on a terracotta backdrop", cat: "Portraits", ratio: 1132 / 1500 },
  { src: "/images/gallery-16.jpg", alt: "Black bodysuit on a light backdrop", cat: "Branding", ratio: 1131 / 1500 },
];

/* ---------------- Branches ---------------- */
export const branches = [
  {
    id: "yaba",
    name: "Yaba",
    label: "Main studio",
    address: ["Ground floor, Ozone Cinema Mall", "1–11 Commercial Avenue, Sabo", "Yaba, Lagos"],
    phones: [{ label: "Phone", display: "0806 990 2598", e164: "+2348069902598" }, { label: "WhatsApp", display: "0808 036 3312", e164: "+2348080363312" }],
    hours: [
      ["Monday", "10:00am – 9:00pm"],
      ["Tue, Wed, Fri", "10:00am – 9:30pm"],
      ["Thursday", "10:00am – 8:30pm"],
      ["Saturday", "11:00am – 9:00pm"],
      ["Sunday", "10:30am – 8:00pm"],
    ],
    query: "Ozone Cinema Mall, 1-11 Commercial Avenue, Sabo, Yaba, Lagos",
  },
  {
    id: "leisure",
    name: "Surulere",
    label: "Leisure Mall",
    address: ["Leisure Mall", "97/99 Adeniran Ogunsanya Street", "Surulere, Lagos"],
    phones: [{ label: "Phone", display: "0704 897 8732", e164: "+2347048978732" }],
    hours: [
      ["Mon – Sat", "9:00am – 9:00pm"],
      ["Sunday", "11:00am – 9:00pm"],
    ],
    query: "Leisure Mall, 97/99 Adeniran Ogunsanya Street, Surulere, Lagos",
  },
  {
    id: "adeniran",
    name: "Surulere",
    label: "38 Adeniran Ogunsanya",
    address: ["38 Adeniran Ogunsanya Street", "Surulere, Lagos"],
    phones: [{ label: "Phone", display: "0806 990 2598", e164: "+2348069902598" }],
    hours: [
      ["Mon – Sat", "9:00am – 8:00pm"],
      ["Sunday", "11:00am – 8:00pm"],
    ],
    query: "38 Adeniran Ogunsanya Street, Surulere, Lagos",
  },
];
export const directions = (q: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
export const branchName = (b: (typeof branches)[number]) => `${b.name} · ${b.label}`;

/* ---------------- Booking steps ---------------- */
export const steps = [
  ["Choose your package and space", "Compare packages and pick the Regular Backdrop or the Content Space."],
  ["Pick your branch, date and time", "Choose the branch closest to you and a time that suits you."],
  ["Pay your deposit to confirm", "We send payment details on WhatsApp. Your slot is held once the deposit is in."],
  ["Arrive, shoot, receive", "Come in, enjoy your session and receive your edited photos on the agreed date."],
];

/* ---------------- Policies / FAQ ---------------- */
export const faqs = [
  { q: "Are raw (unedited) photos included?", a: "[CONFIRM WITH OWNER: e.g. raw photos are / are not included, or are available for an extra ₦ [price].] Check the “Raw photos” line in each package above." },
  { q: "How many edited photos do I get?", a: "It depends on your package: Basic [number], Standard [number], Premium [number]. Extra edited photos cost ₦ [price] each. [CONFIRM WITH OWNER]" },
  { q: "When will I receive my photos?", a: "Edited photos are delivered within [number] working days by [delivery method, e.g. Google Drive link / WhatsApp]. Express delivery is ₦ [price]. [CONFIRM WITH OWNER]" },
  { q: "How do deposits and cancellations work?", a: "A deposit of [amount or %] confirms your booking. Cancellations made [number] hours before the shoot [are / are not] refundable, and you may reschedule [number] time(s). [CONFIRM WITH OWNER]" },
  { q: "Can I bring my own makeup artist?", a: "[Yes / No]. [Any fee or conditions.] [CONFIRM WITH OWNER]" },
  { q: "What happens if I'm late?", a: "Your session starts at the booked time. Lateness of more than [number] minutes is deducted from your session time [or other policy]. [CONFIRM WITH OWNER]" },
  { q: "What should I wear or bring?", a: "Bring your outfits on hangers, any accessories or props you love, and arrive with makeup done (unless you've booked makeup). Solid colours photograph beautifully. [CONFIRM WITH OWNER for anything the studio provides.]" },
  { q: "Are prices and policies the same at every branch?", a: "[CONFIRM WITH OWNER: Prices and policies are the same at every branch.] If anything differs, list it here clearly, branch by branch." },
];

export const shootTypes = services.map((s) => s.title).concat("Other");

/* ---------------- Testimonials ----------------
 * Paste real client reviews (e.g. from Google) here. Never invent quotes.
 */
export const testimonials = [
  { quote: "[Paste a real client review from Google, ideally 2–3 sentences about how the shoot felt.]", name: "[Client first name]", shoot: "[Shoot type · Branch]" },
  { quote: "[Second real review, e.g. a birthday or pre-wedding client.]", name: "[Client first name]", shoot: "[Shoot type · Branch]" },
  { quote: "[Third real review, e.g. a family or graduation client.]", name: "[Client first name]", shoot: "[Shoot type · Branch]" },
];
