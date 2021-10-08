export interface AnimeProps {
  id?: number;
  name: string;
  synopsis: string;
  image_url: string;
  total_episodes: number;
  is_movie: boolean;
  is_dubbed: boolean;
  is_completed: boolean;
  created_at: Date;
}

//TODO adicionar demais atributos
