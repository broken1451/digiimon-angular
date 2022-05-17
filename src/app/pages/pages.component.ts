import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, AfterViewInit {
  public isNavbar!: boolean;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {     
      if (event instanceof NavigationEnd) {
        if (event.url.includes('lvl')) {
          this.isNavbar = true;
        } else if (event.url.includes('name')) {
          this.isNavbar = true;
        }else {
          this.isNavbar = false;
        }
      } if (event instanceof NavigationEnd) { 
      }
    });
  }

  ngOnInit(): void {
    if (this.router.url.includes('lvl')) {
      this.isNavbar = true;
    } else if (this.router.url.includes('name')) {
      this.isNavbar = true;
    }
  }
}
