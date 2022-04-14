import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signUpForm?: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      emoji: ['']
    })
  }

  ngOnInit(): void {
  }

  public registerUser() {
    if (this.signUpForm?.value) {
      this.authService.register(this.signUpForm.value).subscribe((res) => console.log(res));
    }
  }

}
