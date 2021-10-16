import { SelectValue } from "antd/lib/select";

export interface FormAnime {
  name: string;
  synopsis: string;
  totalEpisodes: number;
  isDubbed: boolean;
  isMovie: boolean;
  genres: SelectValue;
  image: FileList;
}

export interface FormEpisode {
  anime: SelectValue;
  episodeNumber: number;
  videoUrl: string;
  image: FileList;
}

export interface FormModerator {
  email: string;
}
