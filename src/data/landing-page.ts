export const landingPageData = {
  site: {
    title: "Medan Sports Area",
    description:
      "Platform GIS modern untuk menemukan fasilitas olahraga terbaik di Kota Medan secara cepat, akurat, dan berbasis komunitas.",
    logo: {
      src: "/assets/images/logo.png",
      alt: "Logo Medan Sports Area",
      text: "Medan",
      emphasizedText: "Sports",
      suffixText: "Area",
    },
  },
  links: {
    map: "https://medan-sports-gis-v4.vercel.app/",
    contributor: "https://medan-sports-gis-contributor.vercel.app/",
  },
  navigation: [
    { label: "Tentang", href: "#about" },
    { label: "Fitur", href: "#features" },
    { label: "Cara Kerja", href: "#how" },
    { label: "Unggulan", href: "#advantages" },
    { label: "Tim", href: "#team" },
  ],
  hero: {
    eyebrow: "Platform GIS Olahraga Kota Medan",
    eyebrowIcon: "fas fa-futbol",
    title: {
      firstLine: "Temukan Fasilitas",
      secondLineStart: "Olahraga",
      highlightedText: "Terbaik",
      thirdLine: "di Medan",
    },
    description:
      "Jelajahi gym, futsal, badminton, basket, dan berbagai fasilitas olahraga lainnya melalui peta interaktif yang dirancang khusus untuk kebutuhan masyarakat Kota Medan.",
    image: {
      src: "/assets/images/lapmer.jpeg",
      alt: "Preview fasilitas olahraga Medan",
    },
    actions: [
      {
        label: "Explore Map",
        href: "https://medan-sports-gis-v4.vercel.app/",
        icon: "fas fa-map",
        variant: "primary",
      },
      {
        label: "Become Contributor",
        href: "https://medan-sports-gis-contributor.vercel.app/",
        icon: "fas fa-plus-circle",
        variant: "secondary",
      },
    ],
    highlights: [
      { value: "25+", label: "Sport centers" },
      { value: "6", label: "Sports categories" },
      { value: "4.9", label: "Community rating" },
      { value: "100%", label: "Free access" },
    ],
  },
  about: {
    cards: [
      {
        tag: "Problem",
        tagClass: "tag-problem",
        icon: "fas fa-exclamation-triangle",
        title: "Data fasilitas belum terpusat",
        description: "Banyak fasilitas olahraga di Medan belum tercatat secara lengkap dan terstruktur di platform umum.",
      },
      {
        tag: "Impact",
        tagClass: "tag-intro",
        icon: "far fa-map",
        title: "Sulit menemukan tempat olahraga",
        description: "Pengguna harus mencari informasi lokasi, harga, dan fasilitas secara manual dari berbagai sumber.",
      },
      {
        tag: "Solution",
        tagClass: "tag-solution",
        icon: "fas fa-lightbulb",
        title: "Peta olahraga berbasis GIS",
        description: "Medan Sports Area menghadirkan sistem pemetaan digital khusus fasilitas olahraga di Kota Medan.",
      },
    ],
    label: "Tentang Platform",
    labelIcon: "fas fa-dumbbell",
    title: "Platform GIS khusus fasilitas olahraga",
    description:
      "Medan Sports Area membantu masyarakat menemukan lokasi olahraga terdekat, melihat detail fasilitas, serta berkontribusi memperbarui data secara kolaboratif.",
    stats: [
      { value: "25", target: 25, label: "Sport Center", icon: "fas fa-location-dot" },
      { value: "6", target: 6, label: "Jenis Olahraga", icon: "fas fa-futbol" },
      { value: "100%", label: "Gratis Akses", icon: "fas fa-wifi" },
      { value: "4.9", label: "Rating", icon: "fas fa-star" },
    ],
  },
  features: {
    label: "Fitur Unggulan",
    labelIcon: "fas fa-crown",
    title: "Semua yang Kamu Butuhkan",
    items: [
      { title: "Google Authentication", description: "Login lebih cepat dan aman menggunakan akun Google.", icon: "fas fa-key" },
      { title: "Interactive GIS Map", description: "Peta interaktif modern untuk eksplorasi fasilitas olahraga secara real-time.", icon: "fas fa-map-marked-alt" },
      { title: "Search & Filter", description: "Cari fasilitas berdasarkan kategori olahraga, lokasi, harga, dan kebutuhan.", icon: "fas fa-search" },
      { title: "User Contributions", description: "Tambahkan lokasi baru dan bantu memperbarui informasi fasilitas olahraga.", icon: "fas fa-users" },
      { title: "Reviews & Ratings", description: "Lihat ulasan pengguna dan bagikan pengalaman olahraga terbaikmu.", icon: "fas fa-star" },
      { title: "GPS Detection", description: "Deteksi lokasi otomatis untuk menemukan fasilitas olahraga terdekat.", icon: "fas fa-mobile-alt" },
    ],
  },
  howItWorks: {
    label: "Cara Kerja",
    labelIcon: "fas fa-compass",
    title: "Mudah dalam 3 Langkah",
    steps: [
      { title: "Open Platform", description: "Buka platform Medan Sports Area langsung dari browser." },
      { title: "Find Nearby Sports Area", description: "Temukan fasilitas olahraga berdasarkan lokasi dan kategori yang diinginkan." },
      { title: "Visit & Review", description: "Kunjungi tempat pilihanmu lalu bantu pengguna lain melalui ulasan dan rating." },
    ],
  },
  advantages: {
    image: {
      src: "/assets/images/logo.png",
      alt: "SportGIS",
    },
    label: "Keunggulan",
    labelIcon: "fas fa-chart-line",
    title: "Lebih fokus dari peta umum",
    items: [
      { title: "Specialized Sports Discovery", description: "Dirancang khusus untuk kebutuhan pencarian fasilitas olahraga.", icon: "fas fa-gem" },
      { title: "Community-driven Updates", description: "Data terus berkembang melalui kontribusi aktif dari komunitas pengguna.", icon: "fas fa-satellite-dish" },
      { title: "Accurate Sports Categories", description: "Kategori olahraga disusun lebih spesifik dan relevan.", icon: "fas fa-volleyball-ball" },
      { title: "Local Medan-focused Platform", description: "Dikembangkan untuk mendukung kebutuhan olahraga masyarakat Kota Medan.", icon: "fas fa-rocket" },
    ],
  },
  team: {
    label: "Tim Pengembang",
    labelIcon: "fas fa-users",
    title: "Orang di Balik Medan Sports Area",
    members: [
      {
        name: "Muhammad Ariza Risky (2305181056)",
        role: "Team Leader & Web Developer",
        photo: "/assets/photos/memberPhotos1.jpeg",
      },
      {
        name: "Sultan Rafi Djafar (2305181092)",
        role: "Mobile Developer & QGIS Implementor",
        photo: "/assets/photos/memberPhotos2.jpeg",
      },
      {
        name: "Habib a'la al maududi (2305181032)",
        role: "Web Developer",
        photo: "/assets/photos/memberPhotos3.jpeg",
      },
      {
        name: "Ronatal Christian Dame (2305181004)",
        role: "Surveyor & Data Researcher",
        photo: "/assets/photos/memberPhotos4.jpeg",
      },
      {
        name: "Nathanaiel Sihombing (2305181040)",
        role: "Surveyor & Data Researcher",
        photo: "/assets/photos/memberPhotos5.jpeg",
      },
      {
        name: "Salman Fatihah (2305181104)",
        role: "Surveyor & Data Researcher",
        photo: "/assets/photos/memberPhotos6.png",
      },
    ],
  },
  cta: {
    label: "Mulai Sekarang",
    labelIcon: "fas fa-play-circle",
    title: "Mulai Temukan Tempat Olahraga Favoritmu",
    description:
      "Akses platform pemetaan olahraga modern dan bantu komunitas membangun data fasilitas olahraga yang lebih lengkap di Kota Medan.",
    actions: [
      {
        label: "Jelajahi Sekarang",
        href: "https://medan-sports-gis-v4.vercel.app/",
        icon: "fas fa-map-marked-alt",
        variant: "primary",
      },
      {
        label: "Tambah Lokasi",
        href: "https://medan-sports-gis-contributor.vercel.app/",
        icon: "fas fa-plus",
        variant: "secondary",
      },
    ],
  },
  footer: {
    description: "Platform pemetaan fasilitas olahraga berbasis komunitas untuk Kota Medan.",
    socialLinks: [
      { label: "GitHub", href: "#", icon: "fab fa-github" },
      { label: "Instagram", href: "#", icon: "fab fa-instagram" },
      { label: "Twitter", href: "#", icon: "fab fa-twitter" },
      { label: "YouTube", href: "#", icon: "fab fa-youtube" },
    ],
    columns: [
      {
        title: "Navigasi",
        links: [
          { label: "Beranda", href: "#home" },
          { label: "Tentang", href: "#about" },
          { label: "Fitur", href: "#features" },
          { label: "Tim", href: "#team" },
        ],
      },
      {
        title: "Platform",
        links: [
          { label: "Jelajahi Peta", href: "https://medan-sports-gis-v4.vercel.app/", icon: "fas fa-map" },
          {
            label: "Tambah Lokasi",
            href: "https://medan-sports-gis-contributor.vercel.app/",
            icon: "fas fa-plus-circle",
          },
          { label: "Beri Ulasan", href: "https://medan-sports-gis-v4.vercel.app/", icon: "fas fa-star" },
        ],
      },
      {
        title: "Kontak",
        links: [
          { label: "info@medansportsarea.com", href: "mailto:info@medansportsarea.com" },
          { label: "GitHub", href: "#" },
          { label: "Instagram", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Medan Sport Area - Project Akhir Mata Kuliah SIG",
  },
} as const;