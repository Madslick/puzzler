import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
        map(result => result.matches)
    );

    constructor(private router:Router, private breakpointObserver: BreakpointObserver) { }

    ngOnInit(){
        /*this.router.events.subscribe((event: RouterEvent) => {
            console.log(event);
            if (event instanceof NavigationEnd ) {
                this.currentUrl = event.url;
                console.log(this.currentUrl);
            }
        });*/
    }
}
