export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "bnchmarc",
  "alternateName": "bnchmarc PG and Hostels",
  "url": "https://www.bnchmarc.com",
  "logo": "https://www.bnchmarc.com/logo.png",
  "description": "Premium PG, hostel, and co-living spaces in Bengaluru offering fully furnished accommodation with modern amenities for students and working professionals.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New BEL Road, Mathikere",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560091",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0358",
    "longitude": "77.5540"
  },
  "telephone": "+917411057111",
  "email": "booking@bnchmarc.com",
  "priceRange": "₹7000 - ₹24000",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "currenciesAccepted": "INR",
  "openingHours": "Mo-Su 00:00-23:59",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const propertySchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "name": "89 Xquisit PG - bnchmarc",
    "description": "Premium PG accommodation near MS Ramaiah, MSRIT, and BEL offering fully furnished rooms with AC, Wi-Fi, food, and 24/7 security.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "89 Xquisit, New BEL Road, Mathikere",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560091",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0358",
      "longitude": "77.5540"
    },
    "telephone": "+917411057111",
    "priceRange": "₹10000 - ₹24000",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "AC Rooms" },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi" },
      { "@type": "LocationFeatureSpecification", "name": "Food Included" },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Security" },
      { "@type": "LocationFeatureSpecification", "name": "Housekeeping" },
      { "@type": "LocationFeatureSpecification", "name": "Washing Machine" }
    ],
    "occupancy": {
      "@type": "QuantitativeValue",
      "minValue": "1",
      "maxValue": "3"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "name": "Atlantis Co-Living Space - bnchmarc",
    "description": "Modern co-living PG near Manyata Tech Park with high-speed Wi-Fi, power backup, and parking facilities.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nagavara",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560045",
      "addressCountry": "IN"
    },
    "telephone": "+917411057111",
    "priceRange": "₹7000 - ₹12000",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi" },
      { "@type": "LocationFeatureSpecification", "name": "Power Backup" },
      { "@type": "LocationFeatureSpecification", "name": "Parking" },
      { "@type": "LocationFeatureSpecification", "name": "Housekeeping" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "name": "220 Coffee Board - bnchmarc",
    "description": "Independent Single BHK apartment for rent in prime location with modern amenities.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "220 Coffee Board Layout",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "telephone": "+917411057111",
    "priceRange": "₹17000",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Single BHK" },
      { "@type": "LocationFeatureSpecification", "name": "Fully Furnished" },
      { "@type": "LocationFeatureSpecification", "name": "Independent" }
    ]
  }
];

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.bnchmarc.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "PG in Bengaluru",
      "item": "https://www.bnchmarc.com/#properties"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the price range for PG in Bengaluru at bnchmarc?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our PG accommodation in Bengaluru ranges from ₹7,000 to ₹24,000 per month depending on the room type (single, double, or triple sharing) and location."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities are included in bnchmarc PG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All our PG accommodations include AC, high-speed Wi-Fi, optional food, 24/7 water and electricity, washing machines, housekeeping, CCTV security, and fully furnished rooms."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have separate PG for boys and girls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer dedicated PG accommodations for both boys and girls with the same amenities and pricing structure."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Bengaluru do you have PG properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have PG properties in Mathikere (89 Xquisit near BEL Road), Nagavara (Atlantis near Manyata Tech Park), and Coffee Board Layout."
      }
    }
  ]
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LodgingBusiness",
    "name": "89 Xquisit PG - bnchmarc"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Prasanna Siva"
  },
  "reviewBody": "My stay at 89xquisit PG has been excellent. The rooms are spacious, neat, and regularly cleaned. The management is professional and always attentive to residents' comfort."
};
