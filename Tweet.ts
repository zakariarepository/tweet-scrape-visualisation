export interface tweet{
    Content:String;
    lien:String;
    likes:String;
    sentiment: Sentiment;
}
export interface Sentiment{
    Happy: Number;
    Angry: Number;
    Surprise: Number;
    Sad: Number;
    Fear: Number
}