export type BlogMetadata = {
  author: string;
  title: string;
  subTitle: string;
  slug: string;
  date: string;
  category: string;
  type: string;
  tags: string[];
  stack: string[];
  index: number;
  series?: {
    id: string,
    index: number,
    length: number
  };
  pagnation: {
    next: {
      slug: string,
      title: string,
      index: number
    } | null;
    previous: {
      slug: string,
      title: string,
      index: number
    } | null;
  };
}