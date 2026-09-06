type Carrousel3D_Type = {
  id: number | string;
  image: string; /* Doit être au format 3:4 avec max 150ko */
  title?: string;
  subtitle?: string;
  description?: string;
}

interface Carrousel3D_Props {
  slides: Carrousel3D_Type[];
  isPageBackground?: boolean;
  className?: string;
}

interface Slide_Props extends Carrousel3D_Type {
  offset: number;
  isPageBackground: boolean;
}

export type { Carrousel3D_Type, Carrousel3D_Props, Slide_Props };
