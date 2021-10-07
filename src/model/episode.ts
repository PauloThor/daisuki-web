import { Anime } from "./anime";

export interface Episode {
  id?: number;
  episode_number?: number;
  image_url?: string;
  video_url?: string;
  views?: number;
  anime?: Anime;
  created_at?: string;
}
