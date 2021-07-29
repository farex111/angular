import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
    
   }
 
  ngOnInit(): void {
     for (let i = 0; i < this.accordions.length; i++) {
      const element = this.accordions[i];
      element.addEventListener('click', function(){
        element.classList.toggle('active')
      })
    }
  }
  accordions : any = document.getElementsByClassName('contentbx');
}
