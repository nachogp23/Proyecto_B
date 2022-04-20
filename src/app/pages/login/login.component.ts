import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';


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
    public router: Router,
    public loading: LoadingService
    ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  logInUser(){
    if(this.signInForm?.value) {
      this.authService.logIn(this.signInForm?.value).subscribe({
        next: (res) => console.log(res),
        error: (err) => this.error = err.error.message,
        });
        this.loading.stopLoading();
        console.log(this.signInForm?.value)
    }
  }

  toSignUpPage() {
    this.router.navigate(['/register']);
  }

}
