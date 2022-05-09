import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delayWhen } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public signUpForm?: FormGroup;
  public error?: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public loading: LoadingService
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      hero: ['']
    })
  }

  ngOnInit(): void {
  }

  public registerUser() {
    if (this.signUpForm?.value) {
      this.authService.register(this.signUpForm.value).subscribe((res) => console.log(res));
      this.loading.stopLoading();
      this.router.navigate(['/home']);
    }
  }

}
