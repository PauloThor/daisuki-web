export const genres: {
  [key: string]: string;
} = {
  action: "Ação",
  adventure: "Aventura",
  comedy: "Comédia",
  drama: "Drama",
  sports: "Esporte",
  fantasy: "Fantasia",
  fiction: "Ficção científica",
  gourmet: "Gourmet",
  horror: "Horror",
  josei: "Josei",
  mecha: "Mecha",
  mistery: "Mistério",
  romance: "Romance",
  seinen: "Seinen",
  "slice-of-life": "Slice of life",
  supernatural: "Sobrenatural",
  thriller: "Suspense",
};

export const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const endpointByParam: {
  [key: string]: string;
} = {
  airing: "/animes?is_movie=false&is_completed=false",
  completed: "/animes?is_movie=false&is_completed=true",
  subbed: "/animes?is_movie=false&is_dubbed=false",
  dubbed: "/animes?is_movie=false&is_dubbed=true",
  "top-animes": "/animes?is_movie=false&order_by=rating",
  "subbed-movies": "/animes?is_movie=true&is_dubbed=false",
  "dubbed-movies": "/animes?is_movie=true&is_dubbed=true",
  "top-movies": "/animes?is_movie=true&order_by=rating",
};

export const titleByParam: {
  [key: string]: string;
} = {
  airing: "Animes em lançamento",
  completed: "Animes completos",
  subbed: "Animes legendados",
  dubbed: "Animes dublados",
  "top-animes": "Top animes",
  "subbed-movies": "Filmes legendados",
  "dubbed-movies": "Filmes dublados",
  "top-movies": "Top filmes",
};
