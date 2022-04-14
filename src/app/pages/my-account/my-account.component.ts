import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IUser} from './../../core/services/models/user.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  public user?: IUser;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.authService.getUserProfile(id).subscribe(user => {
          this.user = user.result;
        });
      }
    })
   }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
  }

}
