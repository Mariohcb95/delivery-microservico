import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [MatSidenavModule, MatListModule, RouterLink, RouterOutlet]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
