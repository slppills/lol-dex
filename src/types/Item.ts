export type ItemType = {
  colloq: string;
  description: string;
  gold: object;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  into: string[];
  maps: object;
  name: string;
  plaintext: string;
  stats: object;
  tags: string[];
};
