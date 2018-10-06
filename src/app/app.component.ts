import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  sideNavItems: Array<{icon: string, link: string}> = [
    {icon: 'favorite', link: '#'},
    {icon: 'alarm', link: '#'},
    {icon: 'assignment', link: '#'},
    {icon: 'assessment', link: '#'},
    {icon: 'calendar_today', link: '#'},
    {icon: 'description', link: '#'},
    {icon: 'help_outline', link: '#'},
  ];

  @ViewChild('sidenav') sidenav: MatSidenav;
}
