interface SubMenu {
  name: string;
  path: string;
}

interface NavigationLinksProps {
  name: string;
  path?: string;
  subMenu?: SubMenu[];
}

export const navigationLinks: NavigationLinksProps[] = [
  { name: "Inicio", path: "/" },
  {
    name: "Sesiones",
    subMenu: [
      { name: "comunión", path: "/sesiones/comunion/" },
      {
        name: "sesiones de fotos de familia",
        path: "/sesiones/sesion-de-fotos-de-familia/",
      },
      {
        name: "sesiones de smash cake",
        path: "/sesiones/sesiones-de-smash-cake/",
      },
      {
        name: "sesiones de bebe de 6 meses",
        path: "/sesiones/sesiones-de-bebe-de-6-meses/",
      },
      { name: "recién nacidos", path: "/sesiones/recien-nacido" },
      { name: "maternidad", path: "/sesiones/maternidad/" },
    ],
  },
  { name: "Bodas", path: "/bodas" },
  { name: "Sobre mí", path: "/sobre-mi" },
  { name: "Contacto", path: "/contacto" },
];
