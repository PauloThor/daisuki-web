import { Episode } from "./episode";

export interface Anime {
  id?: number;
  name?: string;
  synopsis?: string;
  imgae_url?: string;
  total_episodes?: number;
  is_movie?: boolean;
  is_dubbed?: boolean;
  is_completed?: boolean;
  episodes?: Episode[];
  created_at?: string;
}
