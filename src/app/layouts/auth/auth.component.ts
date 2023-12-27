import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  pageAction: string = '';
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.events.subscribe((event) => {
      if (
        (event instanceof NavigationEnd && event.url === '/auth/login') ||
        (event instanceof Scroll && event.routerEvent.url === '/auth/login')
      ) {
        this.pageAction = 'Login to your account';
      } else if (
        (event instanceof NavigationEnd && event.url === '/auth/register') ||
        (event instanceof Scroll && event.routerEvent.url === '/auth/register')
      ) {
        this.pageAction = 'Create an account';
      }
    });
  }
}
