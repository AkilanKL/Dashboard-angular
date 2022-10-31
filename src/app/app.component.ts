import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { ViewEncapsulation } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("routeAnim", [
      transition("* => *", [
        query(":enter", [
          style({
            display: "block",
            opacity: 0,
            transform: "translateX(-80px)",
           
          }),
          animate("0.3s",
          style({
            display: "block",
            transform: "translateX(0px)",
            opacity: 1,
           
          }))
        ], {optional: true}),
    
        query(":leave", [
          style({
            display: "block",
          }),
          animate("0.3s",
          style({
            transform: "translateX(-80px)",
            opacity: 0,
           
          }))
        ], {optional: true})


      ])
    ])
  ]
})
export class AppComponent {
  
  title = 'dashboard';

  constructor() {}

  prepareRouterAnim(outlet: RouterOutlet) {
    
      return outlet.activatedRoute.snapshot.url

  }
}
