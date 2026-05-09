import type { Locale } from "@/lib/locale";

export type Bilingual = Record<Locale, string>;

export function t(pair: Bilingual, locale: Locale): string {
  return pair[locale];
}

export const nav = {
  home: { hi: "होम", en: "Home" },
  about: { hi: "परिचय", en: "About" },
  services: { hi: "सेवाएँ", en: "Services" },
  cuisinesNav: { hi: "व्यंजन शैली", en: "Cuisines" },
  menus: { hi: "मेनू", en: "Menus" },
  gallery: { hi: "गैलरी", en: "Gallery" },
  contact: { hi: "संपर्क", en: "Contact" },
} satisfies Record<string, Bilingual>;

export const chrome = {
  callUs: { hi: "कॉल करें", en: "Call us" },
  callUsAria: {
    hi: "हमें ९८३७४४९३३८ पर कॉल करें",
    en: "Call us at 9837449338",
  },
} satisfies Record<string, Bilingual>;

export const brand = {
  tagline: {
    hi: "आगरा, मथुरा, अलीगढ़ और आसपास — शादियों का स्वाद घर जैसा",
    en: "Agra, Mathura, Aligarh & nearby — wedding food that feels like home",
  },
  name: { hi: "शीला रमण केटर्स", en: "Sheela Raman Caters" },
} satisfies Record<string, Bilingual>;

export const home = {
  heroEyebrow: {
    hi: "आगरा · मथुरा · अलीगढ़ व आसपास",
    en: "Agra · Mathura · Aligarh & nearby",
  },
  heroTitle: {
    hi: "बड़ी शादी हो या घर की छोटी रस्म — खाना बोले दिल की बात",
    en: "Grand weddings or intimate gatherings — food that speaks from the heart",
  },
  heroLead: {
    hi: "शादी व समारोह की केटरिंग — Live counters से लेकर थाल तक, आपकी रस्म और स्थान के हिसाब से।",
    en: "Wedding & celebration catering — from live counters to thali service, shaped around your rituals and venue.",
  },
  ctaPrimary: { hi: "व्हाट्सएप पर बात करें", en: "Chat on WhatsApp" },
  ctaSecondary: { hi: "फ़ोन करें", en: "Call us" },
  statsScaleLabel: { hi: "कार्यक्रम का आकार", en: "Event scale" },
  trustGuests: {
    hi: "छोटे समारोह से भव्य शादियाँ तक",
    en: "Intimate gatherings to grand weddings",
  },
  trustVeg: { hi: "१००% शाकाहारी", en: "100% vegetarian" },
  trustAreas: {
    hi: "आगरा · मथुरा · अलीगढ़ · आसपास के शहर",
    en: "Agra · Mathura · Aligarh · nearby towns",
  },
  aboutEyebrow: { hi: "हम कौन हैं", en: "Who we are" },
  aboutTitle: {
    hi: "आपके विशेष दिन को और भी खास बनाना",
    en: "Making your special day feel effortless",
  },
  aboutLead: {
    hi: "शीला रमण केटर्स में आपका स्वागत है — आगरा, मथुरा, अलीगढ़ और आसपास में शादियों व समारोहों की विश्वसनीय केटरिंग।",
    en: "Welcome to Sheela Raman Caters — trusted wedding and celebration catering across Agra, Mathura, Aligarh & nearby.",
  },
  aboutBody: {
    hi: "हम मेनू योजना, लाइव काउंटर, थाल व बुफ़े सेवा को आपकी रस्म और समय के अनुसार जोड़ते हैं। छोटी संख्या से लेकर बड़ी संख्या तक — स्वच्छ रसोई, समय पर सेटअप, और मेहमानों के लिए ताज़ा खाना।",
    en: "We join menu planning, live counters, thali and buffet service to your rituals and timeline — small gatherings to large weddings, with hygienic kitchens, punctual setup, and food served fresh.",
  },
  statsEyebrow: { hi: "संख्या में भरोसा", en: "At a glance" },
  recentEyebrow: {
    hi: "हाल का कार्यक्रम",
    en: "Recently organised event",
  },
  videoGalleryCta: { hi: "फ़ोटो गैलरी खोलें", en: "Open photo gallery" },
  sectionOccasions: {
    hi: "हमारी मुख्य सेवाएँ",
    en: "Our services",
  },
  occasionsLead: {
    hi: "शादी से लेकर घर की पार्टी तक — एक ही टीम, एक ही स्वाद का धागा।",
    en: "From weddings to home parties — one team, consistent quality.",
  },
  sectionMenusTeaser: {
    hi: "हमारे मेनू",
    en: "Our menus",
  },
  menusTeaserLead: {
    hi: "शुरुआती ढाँचे — अंतिम मेनू आपकी रस्म और बजट से तय होता है।",
    en: "Starting frameworks — your ritual and budget shape the final menu.",
  },
  viewMenus: { hi: "सारे पैकेज देखें", en: "View all packages" },
  testimonialsEyebrow: { hi: "प्रतिक्रिया", en: "Testimonials" },
  sectionSocialProof: {
    hi: "परिवार अक्सर क्या कहते हैं",
    en: "What families often mention",
  },
  socialProofLead: {
    hi: "ये सामान्य प्रतिक्रिया की थीमें हैं — संदर्भ के लिए बात करें।",
    en: "Typical feedback themes — ask us if you want references.",
  },
  galleryEyebrow: { hi: "हाल की तस्वीरें", en: "Recent snaps" },
  sectionGallery: { hi: "गैलरी", en: "Gallery" },
  galleryTeaserMain: { hi: "चुनिंदा कार्य", en: "Signature setups" },
  galleryTeaserWedding: { hi: "एक शादी का दिन", en: "A wedding we served" },
  galleryTeaserHome: { hi: "घर की छोटी पार्टी", en: "Home gathering" },
  gallerySnapMore: { hi: "और तस्वीरें", en: "More moments" },
  viewGallery: { hi: "पूरी गैलरी देखें", en: "View full gallery" },
  waPreset: {
    hi: "नमस्ते शीला रमण केटर्स, मुझे अपनी शादी/कार्यक्रम के लिए catering की जानकारी चाहिए।",
    en: "Hello Sheela Raman Caters, I'd like details for catering at my wedding/event.",
  },
  tierSilver: { hi: "चाँदी", en: "Silver" },
  tierGold: { hi: "स्वर्ण", en: "Gold" },
  tierPlatinum: { hi: "प्लैटिनम", en: "Platinum" },
  customMenusEyebrow: { hi: "कस्टम मेनू", en: "Customised menus" },
  customMenusTitle: {
    hi: "अपनी पसंद का मेनू बनाएँ",
    en: "Design a menu around your taste",
  },
  customMenusLead: {
    hi: "विवाह, संगीत या घर की रस्म — हम व्यंजन चुनकर मेनू बनाने में मदद करते हैं। व्हाट्सएप पर तारीख व संख्या भेजें।",
    en: "Weddings, sangeet or home rituals — we help you mix dishes into a practical menu. WhatsApp your date and guest count.",
  },
  cuisinesEyebrow: { hi: "रसोई की शैलियाँ", en: "Cuisines we carry well" },
  cuisinesTitle: {
    hi: "उत्तर भारतीय व क्षेत्रीय स्वाद — शाकाहारी",
    en: "North Indian & regional flavours — all vegetarian",
  },
  cuisinesLead: {
    hi: "थाल, बुफ़े और लाइव स्टॉल — आपके कार्यक्रम के हिसाब से।",
    en: "Thali, buffet and live stalls — scaled to your occasion.",
  },
  thanksTitle: { hi: "आभार", en: "Thanks for visiting" },
  thanksLead: {
    hi: "योजना के लिए नीचे व्हाट्सएप या संपर्क पृष्ठ का उपयोग करें — हम जल्दी जवाब देंगे।",
    en: "Use WhatsApp below or the contact page to plan your event — we reply quickly.",
  },
} satisfies Record<string, Bilingual>;

export const services = {
  title: { hi: "सेवाएँ", en: "Services" },
  lead: {
    hi: "हर परिवार की रस्म अलग होती है। हम आपकी परंपरा और टाइमलाइन के हिसाब से मेनू बनाते हैं।",
    en: "Every family celebrates differently. We shape menus around your traditions and timeline.",
  },
  items: [
    {
      title: {
        hi: "शादी व संगीत संध्या",
        en: "Weddings & sangeet nights",
      },
      body: {
        hi: "भारी संख्या में मेहमानों के लिए Live counters, थाल सेवा, या बैंक्वेट स्टाइल।",
        en: "Live counters, thali service, or banquet-style for large guest lists.",
      },
    },
    {
      title: {
        hi: "रिंग सेरेमनी व छोटे समारोह",
        en: "Ring ceremonies & intimate functions",
      },
      body: {
        hi: "घर या छोटे लawns पर गर्मागर्म, स्वच्छ और समय पर सेवा।",
        en: "Warm, hygienic, punctual service at home or smaller lawns.",
      },
    },
    {
      title: {
        hi: "विशेष मेनू",
        en: "Special dietary menus",
      },
      body: {
        hi: "जैन / बिना प्याज़–लहसुन विकल्प — बस पहले से बता दें।",
        en: "Jain / no onion–garlic options — tell us when we plan together.",
      },
    },
  ],
} as const;

export const galleryPage = {
  title: { hi: "फ़ोटो गैलरी", en: "Photo gallery" },
  lead: {
    hi: "हमारे काम की तस्वीरें — सबसे पहले चुनिंदा सेटअप, फिर एक शादी का दिन, और घर की छोटी पार्टी।",
    en: "Real setups — starting with our signature work, one full wedding, and a cosy home gathering.",
  },
  tabMain: { hi: "चुनिंदा", en: "Signature" },
  tabWedding: { hi: "शादी", en: "Wedding" },
  tabHome: { hi: "घर की पार्टी", en: "Home gathering" },
} satisfies Record<string, Bilingual>;

export const packages = {
  title: { hi: "मेनू", en: "Menus" },
  lead: {
    hi: "नीचे के उदाहरण शुरुआती बिंदु हैं — संख्या, रस्म और स्थान के हिसाब से हम मेनू को आपके लिए ढालते हैं।",
    en: "The samples below are starting points — we tailor menus to guest count, rituals, and venue.",
  },
  note: {
    hi: "अंतिम दरें तारीख, मेनू और सेवाओं के बाद तय होती हैं। टेस्टिंग व एडवांस — फ़ोन पर साफ़ बात।",
    en: "Final pricing depends on date, menu depth, and staffing. Tasting & advance terms — discussed clearly on call.",
  },
  menuCatalogEyebrow: {
    hi: "व्यवसाय मेनू",
    en: "Business menu",
  },
  menuCatalogTitle: {
    hi: "संपूर्ण सूची (चयन)",
    en: "Full selection list",
  },
  menuCatalogLead: {
    hi: "नीचे दी सूची आपके Google व्यवसाय प्रोफ़ाइल के मेनू से है — कार्यक्रम के हिसाब से अंतिम पाक सूची बदल सकती है।",
    en: "The categories and dishes below match our Google Business Profile menu — your final lineup is tailored to each event.",
  },
  tiers: [
    {
      name: { hi: "सुंदर शुरुआत", en: "Graceful beginning" },
      blurb: {
        hi: "छोटे समारोहों के लिए — थाल / बुफ़े का संतुलित मिश्रण।",
        en: "For smaller functions — balanced thali or buffet selection.",
      },
    },
    {
      name: { hi: "शाही दावत", en: "Royal spread" },
      blurb: {
        hi: "बड़े फ़ंक्शन — अधिक Live counters, मिठाइयाँ, वेलकम ड्रिंक्स।",
        en: "Large parties — more live counters, mithai, welcome drinks.",
      },
    },
    {
      name: { hi: "आपकी रस्म, आपका मेनू", en: "Your ritual, your menu" },
      blurb: {
        hi: "कस्टम — ब्रज और यूपी की रसोई की पसंद के साथ।",
        en: "Fully custom — grounded in Braj & UP favourites.",
      },
    },
  ],
} as const;

export const contact = {
  title: { hi: "संपर्क करें", en: "Get in touch" },
  lead: {
    hi: "एक कॉल या व्हाट्सएप संदेश से शुरू करें — तारीख, अनुमानित मेहमान और स्थान बता दें।",
    en: "Start with a call or WhatsApp — share your date, approximate guests, and venue town.",
  },
  phones: { hi: "फ़ोन", en: "Phone" },
  hours: {
    hi: "हम उत्तर प्रदेश में सेवा करते हैं; कॉल टाइम सुबह ९ से रात ९ जैसा रखें।",
    en: "We serve across Uttar Pradesh; calling hours roughly 9 am – 9 pm work best.",
  },
  waCta: { hi: "व्हाट्सएप करें", en: "Message on WhatsApp" },
  areasTitle: { hi: "इलाक़े", en: "Areas we serve" },
  areasBody: {
    hi: "आगरा, मथुरा, अलीगढ़, वृंदावन व आसपास के कस्बे — बस बता दें कार्यक्रम कहाँ है।",
    en: "Agra, Mathura, Aligarh, Vrindavan, and nearby towns — tell us where your function is.",
  },
} satisfies Record<string, Bilingual>;

export const footer = {
  rights: {
    hi: "© शीला रमण केटर्स। सभी अधिकार सुरक्षित।",
    en: "© Sheela Raman Caters. All rights reserved.",
  },
  startPlanning: {
    hi: "योजना शुरू करें",
    en: "Start planning",
  },
} satisfies Record<string, Bilingual>;
