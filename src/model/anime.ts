import { Episode } from "./episode";

export interface Genre {
  id?: number;
  name: string;
}

export interface Anime {
  id?: number;
  name?: string;
  synopsis?: string;
  imageUrl?: string;
  totalEpisodes?: number;
  isMovie?: boolean;
  isDubbed?: boolean;
  isCompleted?: boolean;
  episodes?: Episode[];
  genres?: Genre[];
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
}
