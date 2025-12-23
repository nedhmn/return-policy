export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  domain: string;
  bookingDomain: string;
  url: string;
  foundedYear: number;

  contact: {
    email: string;
    phone: string;
    phoneRaw: string;
    address: {
      street: string;
      suite?: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };

  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };

  email: {
    from: string;
    partnerRecipient: string;
  };

  stats: {
    guestsServed: { value: number; suffix: string };
    avgRating: { value: number; suffix: string };
    countries: number;
  };
}

export const siteConfig: SiteConfig = {
  name: "Return Policy",
  title: "Return Policy | Short-Term Stays",
  description:
    "Every departure, just another beginning. Short-term stays designed to feel less like rentals and more like residences.",
  domain: "returnpolicystays.com",
  bookingDomain: "book.returnpolicystays.com",
  url: "https://returnpolicystays.com",
  foundedYear: 2018,

  contact: {
    email: "help@returnpolicystays.com",
    // phone: "+1 (416) 554-3272",
    // phoneRaw: "+14165543272",
    phone: "+1 (778) 742-5675",
    phoneRaw: "+17787425675",
    address: {
      street: "639 Queen St W",
      suite: "Suite 501",
      city: "Toronto",
      state: "ON",
      postalCode: "M5V 2B7",
      country: "Canada",
    },
  },

  socials: {
    instagram: "https://www.instagram.com/returnpolicystays",
    facebook: "https://facebook.com/return-policy",
    linkedin: "https://linkedin.com/company/return-policy",
  },

  email: {
    from: "Return Policy <noreply@returnpolicystays.com>",
    partnerRecipient: "partner@returnpolicystays.com",
  },

  stats: {
    guestsServed: { value: 300, suffix: "K+" },
    avgRating: { value: 9.8, suffix: "/10" },
    countries: 3,
  },
};
