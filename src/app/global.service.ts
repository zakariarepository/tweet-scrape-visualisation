import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private http : HttpClient
  ) { }


  retreiveTweets(keyword:string){
    this.http.get("https://tweetsentiments.azurewebsites.net/api/HttpTrigger1?query_keyword="+keyword);
  }
}
