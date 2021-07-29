import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiperr',
  templateUrl: './swiperr.component.html',
  styleUrls: ['./swiperr.component.scss']
})

export class SwiperrComponent implements OnInit {

  perview = 4;

  slides:any = [
    {name:"slides"},
    {name:"slides"},
    {name:"slides"},
    {name:"slides"},
    {name:"slides"},
    {name:"slides"},
  ]
  onSwiper( swiper:any){
    console.log(swiper)
  }
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      if(window.innerWidth < 800){
        this.perview = 1
      } else {
        this.perview = 3;
      }
    })
  }

}
