import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  pageAction: string = '';
  urlMap: Record<string, string> = {
    '/auth/login': 'Login to your account',
    '/auth/register': 'Create an account',
    '/auth/onboarding': 'Create your profile',
  };
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.events.subscribe((event) => {
      const targetUrl =
        event instanceof NavigationEnd
          ? event.url
          : (event instanceof Scroll && event.routerEvent.url) || '';
      this.pageAction = this.urlMap[targetUrl];
    });
  }
}
