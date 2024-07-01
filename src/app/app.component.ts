import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(
    private http:HttpClient
  ){

  }
  title = 'PiS4';
  showTweets:boolean=true;
  Arr = Array; //Array type captured in a variable
  KeyWordCount=1;
  addKeyWord(){
    this.KeyWordCount++;
  }
  Go(){
    alert(this.showTweets)
  }
}
