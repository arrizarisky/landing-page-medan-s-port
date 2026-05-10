export const landingPageData = {
  site: {
    title: "Medan Sports Area",
    description:
      "Platform GIS untuk menemukan, menilai, dan menambahkan fasilitas olahraga di Kota Medan.",
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
    eyebrow: "Medan Sports Area Community",
    eyebrowIcon: "fas fa-futbol",
    title: {
      firstLine: "Temukan Fasilitas",
      secondLineStart: "Olahraga",
      highlightedText: "Terbaik",
      thirdLine: "di Medan",
    },
    description:
      "Jelajahi gym, badminton, futsal, dan sport center lain melalui peta interaktif yang fokus pada kebutuhan olahraga lokal.",
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
        title: "Data fasilitas belum rapi",
        description: "Banyak fasilitas olahraga lokal belum tercatat lengkap di peta umum.",
      },
      {
        tag: "Impact",
        tagClass: "tag-intro",
        icon: "far fa-map",
        title: "Sulit menemukan lokasi terdekat",
        description: "Pengguna perlu membandingkan kategori, jarak, dan detail tempat secara manual.",
      },
      {
        tag: "Solution",
        tagClass: "tag-solution",
        icon: "fas fa-lightbulb",
        title: "Peta khusus olahraga",
        description: "Medan Sports Area menyusun data fasilitas olahraga dalam platform GIS yang terfokus.",
      },
    ],
    label: "Tentang Platform",
    labelIcon: "fas fa-dumbbell",
    title: "GIS khusus fasilitas olahraga di Medan",
    description:
      "Platform ini membantu pengguna menemukan lokasi olahraga terdekat, melihat detail fasilitas, dan ikut memperbarui data melalui kontribusi komunitas.",
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
      { title: "Google Authentication", description: "Login cepat dengan akun Google.", icon: "fas fa-key" },
      { title: "Interactive GIS Map", description: "Peta interaktif untuk eksplorasi lokasi olahraga.", icon: "fas fa-map-marked-alt" },
      { title: "Search & Filter", description: "Filter berdasarkan olahraga, harga, jarak, dan area.", icon: "fas fa-search" },
      { title: "User Contributions", description: "Tambahkan tempat baru dan foto fasilitas.", icon: "fas fa-users" },
      { title: "Reviews & Ratings", description: "Bantu pengguna lain lewat ulasan dan rating.", icon: "fas fa-star" },
      { title: "GPS Detection", description: "Deteksi lokasi untuk pencarian yang lebih relevan.", icon: "fas fa-mobile-alt" },
    ],
  },
  howItWorks: {
    label: "Cara Kerja",
    labelIcon: "fas fa-compass",
    title: "Mudah dalam 3 Langkah",
    steps: [
      { title: "Open Platform", description: "Buka peta GIS dari browser." },
      { title: "Find Nearby Sports Area", description: "Cari fasilitas berdasarkan lokasi, kategori, dan kebutuhan." },
      { title: "Visit & Review", description: "Lihat detail, kunjungi tempat, lalu beri ulasan." },
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
      { title: "Specialized Sports Discovery", description: "Tidak bercampur dengan kategori bisnis umum.", icon: "fas fa-gem" },
      { title: "Community-driven Updates", description: "Data bisa bertambah lewat kontribusi pengguna.", icon: "fas fa-satellite-dish" },
      { title: "Accurate Sports Categories", description: "Kategori disusun khusus untuk kebutuhan olahraga.", icon: "fas fa-volleyball-ball" },
      { title: "Local Medan-focused Platform", description: "Dirancang untuk konteks dan wilayah Kota Medan.", icon: "fas fa-rocket" },
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
      "Akses peta digital gratis dan bantu komunitas memperbarui data fasilitas olahraga di Medan.",
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
