import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      useHash: true, // <-- for github pages
      scrollPositionRestoration: 'top', // <-- scroll to top on route change
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
