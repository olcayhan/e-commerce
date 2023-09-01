import category from "./category";

export const data = [
  {
    title: "Telefon",
    href: "/telefon",
    subtitles: [
      ...category.filter((category) =>
        category.category.find((category) => category === "telefon")
      ),
    ],
  },
  {
    title: "Bilgisayar",
    href: "/bilgisayar",
    subtitles: [
      ...category.filter((category) =>
        category.category.find((category) => category === "bilgisayar")
      ),
    ],
  },
  {
    title: "TV, Görüntü ve Ses",
    href: "/tv-goruntu-ve-ses",
    subtitles: [
      ...category.filter((category) =>
        category.category.find((category) => category === "tv-goruntu-ve-ses")
      ),
    ],
  },
  {
    title: "Aksesuar",
    href: "/aksesuar",
    subtitles: [
      ...category.filter((category) =>
        category.category.find((category) => category === "aksesuar")
      ),
    ],
  },
  {
    title: "Foto, Kamera",
    href: "/foto-kamera",
    subtitles: [
      ...category.filter((category) =>
        category.category.find((category) => category === "foto-kamera")
      ),
    ],
  },
];
