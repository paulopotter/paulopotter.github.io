export interface PostMetaStructure {
  // Gerado pelo o notion
  id?: string
  title: string
  // Gerado pelo o notion
  created_time?: string
  // Gerado pelo o notion
  last_edited_time?: string
  cover_image: string
  series?: string
  date: {
    // Gerado pelo o notion
    type: string
    string: string
  } | string
  // Necessário para a integração com o notion
  uri?: {
    type: string
    string: string
  }
  category?: string[]
  cover_image_alt?: string
  cover_image_link?: string
  cover_image_by?: string
  // Necessário para a integração com o notion
  Status: string
  // Gerado pelo o notion
  _thumbnail?: string
}

export interface PostData extends Omit<PostMetaStructure, 'series' | 'date' >{
  content?: string;
  summary?: string;
  slug?: string;
  date?: string;
  series?: {
    title: string;
    slug?: string;
    serie: string;
  }[] | string;

  excerpt?: string;
  imagePath?: string;
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
