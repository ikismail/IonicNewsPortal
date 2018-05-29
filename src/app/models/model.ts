export class ArticleSource {
  id: any;
  name: String;
}

export class Article {
  source: ArticleSource;
  author: any;
  title: String;
  description: String;
  url: String;
  urlToImage: String;
  publishedAt: any;
}

export class NewsSource {
  id: String;
  name: String;
  description: String;
  url: String;
  category: String;
  language: String;
  country: String;
}
