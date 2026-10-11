// Articles Waleed wrote that outlets published. One list for the trust strip and the author card.
// Wording rule: "My articles in" / "Published in" — never "Featured in" or "As seen in" (he wrote them; they did not cover him).
// Outlet names as plain text, no logos (their trademarks).

export type Publication = {
  outlet: string;
  note?: string;
  date: string;
  title: string;
  url: string;
};

export const publications: Publication[] = [
  {
    outlet: "Muscat Daily",
    date: "19 August 2026",
    title: "What foreign buyers get wrong about Oman's new property rules",
    url: "https://www.muscatdaily.com/2026/08/19/what-foreign-buyers-get-wrong-about-omans-new-property-rules/",
  },
  {
    outlet: "OERLive",
    date: "15 September 2026",
    title: "The Sultan Haitham City residency rule most buyers don't know about",
    url: "https://oerlive.com/news/the-sultan-haitham-city-residency-rule-most-buyers-dont-know-about/",
  },
  {
    outlet: "Zawya",
    note: "republished from Muscat Daily",
    date: "20 August 2026",
    title: "What foreign buyers get wrong about Oman's new property rules",
    url: "https://www.zawya.com/en/business/real-estate/what-foreign-buyers-get-wrong-about-omans-new-property-rules-461691",
  },
];
