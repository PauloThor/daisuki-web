import { SelectValue } from "antd/lib/select";

export interface FormAnime {
  name: string;
  synopsis: string;
  totalEpisodes: number;
  isDubbed: boolean;
  isMovie: boolean;
  genres: SelectValue;
  image: File;
}

export interface FormEpisode {
  anime: SelectValue;
  episodeNumber: number;
  videoUrl: string;
  image: string;
}

export interface FormModerator {
  email: string;
}
