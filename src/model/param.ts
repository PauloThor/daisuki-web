export interface ParamProps {
  name: string;
  episode_number?: string;
}

export interface AnimeListParamProps {
  genre: string;
  filter: string;
  search: string;
}

export interface PasswordRecoveryParams {
  id: string;
  token: string;
}
