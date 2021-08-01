import { Component, OnInit } from '@angular/core';
import {posts} from '../posts'
import {Router, ParamMap, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  
  postArray:any = posts;
  postid:any = this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  

  ngOnInit(): void {
    this.postArray = this.postArray.find((els : any) =>{
      return els.id == this.postid;
    })
  }

}

