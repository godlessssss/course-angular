import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('access_token') === null) {
      this.router.navigate(['/login'])
      return
    }
    this.users = [
      { id: 1, username: 'test', email: 'test@test.com' },
      { id: 2, username: 'test2', email: 'test2@test.com' }
    ]
  }

}
