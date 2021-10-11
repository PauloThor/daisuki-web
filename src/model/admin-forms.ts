import { SelectValue } from "antd/lib/select";

export interface FormAnime {
  animeName: string;
  sinopse: string;
  episodesNumber: number;
  isDubbed: boolean;
  isMovie: boolean;
  categories: SelectValue;
  image: string;
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
