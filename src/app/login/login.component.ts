import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let res = this.http.post('http://localhost:3000/auth/login', {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    })

    res.subscribe((data: any) => {
      sessionStorage.setItem('access_token', data.token)
      this.router.navigate(['/dashboard'])
    })
  }

}
