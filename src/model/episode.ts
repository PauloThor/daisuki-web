import { Anime } from "./anime";

export interface Episode {
  id: number;
  episodeNumber?: number;
  imageUrl?: string;
  videoUrl?: string;
  views?: number;
  createdAt?: string;
  updatedAt?: string;
  animeId?: number;
  anime?: Anime;
  hasWatched?: boolean;
}
