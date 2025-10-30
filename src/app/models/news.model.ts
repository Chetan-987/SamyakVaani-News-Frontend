export interface News {
  _id?: string;
  guid?: string;
  title: string;
  link?: string;
  description?: string;
  content?: string;
  categories?: string[];
  pubDate?: string;
  isoDate?: string;
  source?: string;
  image?: string;
  isLocal?: boolean;
  location?: string;
  viewCount?: number;
  // 👇 Add this new optional property
  youtubeThumbnail?: string | null;
}
