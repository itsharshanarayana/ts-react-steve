export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export interface RepositoriesState1 {
  loading: boolean;
  error: string | null;
  data: Repository[];
}

export interface Repository {
  name: string;
  version: string;
  description: string;
  links: Links;
  publisher: Publisher;
}

export interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

export interface Publisher {
  username: string;
  email: string;
}
