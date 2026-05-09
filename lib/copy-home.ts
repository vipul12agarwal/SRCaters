import type { Bilingual } from "@/lib/copy";

/** Homepage-only structured blocks (occasions grid, social proof). */
export const homeOccasions = [
  {
    title: {
      hi: "शादी व रिसेप्शन",
      en: "Wedding & reception",
    },
    blurb: {
      hi: "बड़ी संख्या, Live counters व थाल सेवा।",
      en: "Large counts, live counters & thali service.",
    },
  },
  {
    title: {
      hi: "संगीत व मेंहदी",
      en: "Sangeet & mehendi",
    },
    blurb: {
      hi: "हल्का–फुल्का मेनू से लेकर भरपूर बुफ़े तक।",
      en: "From lighter menus to full spreads.",
    },
  },
  {
    title: {
      hi: "रिंग / रोका / घर की रस्म",
      en: "Ring ceremony / roka / home rituals",
    },
    blurb: {
      hi: "छोटे समूह, घर या छोटे लॉन — समय पर गर्म खाना।",
      en: "Small groups at home or lawns — hot food, on time.",
    },
  },
  {
    title: {
      hi: "धार्मिक व समाज कार्यक्रम",
      en: "Religious & community events",
    },
    blurb: {
      hi: "शुद्ध शाकाहारी व विशेष नियमों का ध्यान।",
      en: "Pure veg & careful ritual preferences.",
    },
  },
  {
    title: {
      hi: "समारोह व कार्यालय (शाकाहारी)",
      en: "Celebrations & offices (vegetarian)",
    },
    blurb: {
      hi: "स्पष्ट मेनू, समान गुणवत्ता हर प्लेट पर।",
      en: "Clear menu planning & consistent plating.",
    },
  },
  {
    title: {
      hi: "घर की पार्टियाँ",
      en: "Home gatherings",
    },
    blurb: {
      hi: "कम मेहमानों के लिए भी पूरा ध्यान।",
      en: "Full attention even for cosy gatherings.",
    },
  },
] as const satisfies ReadonlyArray<{ title: Bilingual; blurb: Bilingual }>;

export const homeCuisines = [
  {
    title: { hi: "उत्तर भारतीय", en: "North Indian" },
    blurb: {
      hi: "रोटी, दाल, सब्ज़ी, पुलाव व अनुभवी मसाले।",
      en: "Breads, dals, seasonal vegetables, rice & familiar favourites.",
    },
  },
  {
    title: { hi: "दक्षिण भारतीय", en: "South Indian" },
    blurb: {
      hi: "दोसा, इडली, सांभर, चटनी व शाकाहारी स्वाद।",
      en: "Dosas, idli, sambar, chutneys & vegetarian favourites.",
    },
  },
  {
    title: { hi: "चाट व नाश्ता", en: "Chaat & snacks" },
    blurb: {
      hi: "लाइव चाट काउंटर व गर्म नाश्ता स्टॉल।",
      en: "Live chaat counters & hot snack stalls.",
    },
  },
  {
    title: { hi: "ब्रज व यूपी के स्वाद", en: "Braj & UP specials" },
    blurb: {
      hi: "स्थानीय पसंद के अनुसार तैयार व्यंजन।",
      en: "Grounded in local tastes guests recognise.",
    },
  },
  {
    title: { hi: "लाइव काउंटर", en: "Live counters" },
    blurb: {
      hi: "दोसा, पाव भाजी, पास्ता स्टाइल स्टॉल — शाकाहारी।",
      en: "Dosas, pav bhaji, pasta-style stalls — all vegetarian.",
    },
  },
  {
    title: { hi: "जैन / सात्विक", en: "Jain / satvik-friendly" },
    blurb: {
      hi: "बिना प्याज़–लहसुन व विशेष नियमों पर ध्यान।",
      en: "No onion–garlic and ritual-friendly planning.",
    },
  },
] as const satisfies ReadonlyArray<{ title: Bilingual; blurb: Bilingual }>;

export const homeSocialProof = [
  {
    rating: 4.8,
    author: {
      hi: "प्रिया एस., मथुरा",
      en: "Priya S., Mathura",
    },
    text: {
      hi: "शाकाहारी बुफ़े बिल्कुल सुव्यवस्थित — समय से चूकने पर भी टीम शांत और सहयोगी रही।",
      en: "Flawless veg buffet for our reception — the team stayed calm even when we ran late.",
    },
  },
  {
    rating: 4.2,
    author: {
      hi: "अमित वर्मा, अलीगढ़",
      en: "Amit V., Aligarh",
    },
    text: {
      hi: "अच्छी विविधता और ईमानदार मात्रा — पारिवारिक कार्यक्रम के लिए फिर बुक करेंगे।",
      en: "Good variety and honest portions. Would book again for a family function.",
    },
  },
  {
    rating: 3.8,
    author: {
      hi: "स्नेहा आर., आगरा",
      en: "Sneha R., Agra",
    },
    text: {
      hi: "कुल मिलाकर अच्छा — दो व्यंजन गर्म और बेहतर हो सकते थे। स्टाफ़ विनम्र और तुरंत सुधार पर आ गया।",
      en: "Overall solid; a couple of dishes could have been hotter. Staff was polite and quick to adjust.",
    },
  },
  {
    rating: 4.6,
    author: {
      hi: "करन मेहता, आगरा",
      en: "Karan M., Agra",
    },
    text: {
      hi: "जैन मेनू पर साफ़ गई बात — रिश्तेदारों ने सामग्री की स्पष्टता सराही।",
      en: "Jain menu was handled carefully — relatives appreciated the clarity on ingredients.",
    },
  },
  {
    rating: 4.4,
    author: {
      hi: "रोहित अग्रवाल, आगरा",
      en: "Rohit Agarwal, Agra",
    },
    text: {
      hi: "संगीत संध्या पर लाइव स्टॉल शानदार रहे — मेहमानों ने पाव भाजी काउंटर पर भीड़ जमाई।",
      en: "Live stalls at our sangeet were a hit — guests crowded the pav bhaji counter.",
    },
  },
  {
    rating: 4.7,
    author: {
      hi: "नेहा सिंघल, आगरा",
      en: "Neha Singhal, Agra",
    },
    text: {
      hi: "रोका पर घर पर सर्विंग समय से — बिना प्याज़–लहसुन वाली थालियों पर विशेष ध्यान।",
      en: "Roka at home: service on time, and real attention to our no onion–garlic thalis.",
    },
  },
  {
    rating: 3.9,
    author: {
      hi: "पवन अग्रवाल, आगरा",
      en: "Pawan Agarwal, Agra",
    },
    text: {
      hi: "बड़ी संख्या में भी थाल सेवा व्यवस्थित रही; एक काउंटर पर थोड़ी भीड़ थी पर टीम संभाल गई।",
      en: "Large guest list but thali service stayed organised; one counter got busy but the team handled it.",
    },
  },
  {
    rating: 4.1,
    author: {
      hi: "अंजलि सिंघल, आगरा",
      en: "Anjali Singhal, Agra",
    },
    text: {
      hi: "ऑफिस समारोह के लिए साफ़ मेनू और प्लेटिंग एक जैसी — बॉस ने तारीफ की।",
      en: "Office celebration: clear menu and consistent plating — even our lead noticed.",
    },
  },
] as const satisfies ReadonlyArray<{
  rating: number;
  author: Bilingual;
  text: Bilingual;
}>;
