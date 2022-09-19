import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'user-root',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title ='lawnetics';
	constructor(private router: Router) { }
	
	ngOnInit() {
		this.router.events.subscribe((event) => {
			if (!(event instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo(0, 0)
		});
	}
}
