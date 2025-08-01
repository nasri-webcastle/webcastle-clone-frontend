// types/navbar.ts
export interface NavbarLink {
  id: number;
  label: string;
  url: string;
}

export interface NavbarData {
  logo: {
    url: string;
  };
  links: NavbarLink[];
}
