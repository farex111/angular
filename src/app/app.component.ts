import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collapsed : any = document.querySelector('.navbar-toggler');
  show : any = document.querySelector('.navbar-collapse')
  title = 'final-project';
  constructor(private router: Router) { }
  menu(){
    this.collapsed.classList.add("Collapsed");
    this.show.classList.add("Show");
    console.log(this.collapsed)
  }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }
}