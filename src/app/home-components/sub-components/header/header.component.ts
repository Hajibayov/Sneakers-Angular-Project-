import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen = false;
  constructor() { }


  ngOnInit(): void {
  }

  public toggleMenu() {
  
    this.isOpen = !this.isOpen;
   
  }
}
