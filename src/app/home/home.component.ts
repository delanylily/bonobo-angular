import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public userDetails: any;
  public isCollapsed: boolean;
  cardDetails: any;
  constructor(private router: Router) {
    this.isCollapsed = false;
  }

  ngOnInit(): void {

  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

}
