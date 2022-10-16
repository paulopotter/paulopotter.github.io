export interface PostData {
  title: string;
  category?: string[];
  content?: string;
  summary?: string;
  slug?: string;
  date?: string;
  series?: {
    title: string;
    slug?: string;
    serie: string;
  }[];

  excerpt?: string;
  imagePath?: string;
  cover_image?: string;
  cover_image_alt?: string;
  cover_image_by?: string;
  cover_image_link?: string;
  cover_image_url?: string;
  readingTime?: string;
  subtitle?: string;
  related?: {
    prevPost?: {
      date: string;
      slug: string;
      title: string;
    };
    nextPost?: {
      date: string;
      slug: string;
      title: string;
    };
  };
}
