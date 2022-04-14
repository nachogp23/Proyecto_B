import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm?: FormGroup;
  public error?: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
    ) {
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() {
  }

  logInUser(){
    if(this.signInForm?.value) {
      this.authService.logIn(this.signInForm?.value).subscribe({
        next: (res) => console.log(res),
        error: (err) => this.error = err.error.message
      });
    }
  }

}
