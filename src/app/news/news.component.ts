import { Component, OnInit } from '@angular/core';
import {posts} from './posts';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  postArray:any = posts;
  constructor() { }

  ngOnInit(): void {
  }

}
