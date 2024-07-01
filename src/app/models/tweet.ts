export class Tweet {
  Content: string;
  lien: string;
  likes: number;
  sentiment: {
    Happy: number,
    Angry: number,
    Surprise: number,
    Sad: number,
    Fear: number
  };

  constructor(content: string, lien: string, likes: number, sentiment: {
    Happy: number,
    Angry: number,
    Surprise: number,
    Sad: number,
    Fear: number
  }) {
    this.Content = content;
    this.lien = lien;
    this.likes = likes;
    this.sentiment = sentiment;
  }
}
