export type Language = 'EN' | 'UZ';

export interface Project {
  id: string;
  title: string;
  category: 'web-design' | 'branding' | 'ui-ux' | '3d-animation';
  tech: string[];
  description: {
    EN: string;
    UZ: string;
  };
  details: {
    EN: string[];
    UZ: string[];
  };
  metrics: {
    label: { EN: string; UZ: string };
    value: string;
  }[];
  accentColor: string;
}

export interface Experience {
  period: string;
  role: { EN: string; UZ: string };
  company: string;
  description: { EN: string; UZ: string };
}

export interface CoreValue {
  title: { EN: string; UZ: string };
  desc: { EN: string; UZ: string };
}
