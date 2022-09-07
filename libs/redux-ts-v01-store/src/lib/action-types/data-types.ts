export interface Publisher {
  username: string;
  email: string;
}

export interface Links {
  npm: string;
  home: string;
  repository: string;
  bugs: string;
}

export interface Repository {
  name: string;
  version: string;
  description: string;
  links: Links;
  publisher: Publisher;
}
