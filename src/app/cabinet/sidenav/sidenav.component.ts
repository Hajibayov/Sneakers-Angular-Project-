import { Component, OnInit } from '@angular/core';
import {faRuler} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  rulerIcon =faRuler
  isExpanded=false
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
