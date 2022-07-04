export interface Game {
  title: string;
  _id: string;
  description: string;
  platforms: Array<string>;
  photos: Array<Photos>;
  genres: Array<string>;
  tags: Array<string>;
  rating: number;
  totalVotes: number;
  videos: Array<Videos>;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  mediumPrice: number;
  releaseYear: number;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Photos {
  name: string;
  url: string;
}

interface Videos {
  type: string;
  url: string;
}

