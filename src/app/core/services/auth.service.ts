import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IUser,
  IUserSignInResponse,
  IUserSignUpResponse,
} from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLogged: ReplaySubject<string | undefined> = new ReplaySubject<
    string | undefined
  >();

  constructor(private httpClient: HttpClient, private router: Router) {
    const userId = this.getUserId();
    if(userId) {
      this.userLogged.next(userId);
    }
  }

  public logIn(user: IUser) {
    return this.httpClient
      .post<IUserSignInResponse>(`${environment.authApiUrl}/signin`, user)
      .pipe(
        tap((res: IUserSignInResponse) => {
          if (res.token) {
            const user = JSON.stringify({ token: res.token, id: res._id });
            localStorage.setItem('acces_token', user);
            this.userLogged.next(res._id);
            console.log(user);
            this.router.navigate(['']);

          }
        })
      );
  }

  public register(user: IUser): Observable<IUserSignUpResponse> {
    return this.httpClient.post<IUserSignUpResponse>(
      `${environment.authApiUrl}/register-user`,
      user
    );
  }

  public logout() {
    let removeToken = localStorage.removeItem('acces_token');
    this.userLogged.next(undefined);
    if (removeToken == null) {
      this.router.navigate(['']);
    };
  }


  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('acces_token');
    console.log(authToken);

    if(authToken == null) {
      return false;
    } else {
      return true;
    }

   // return authToken !== null;
    }

  public getToken(): string {
    const user = localStorage.getItem('acces_token');
    return user ? JSON.parse(user)?.token : null;
  }

  public getUserId(): string {
  const user = localStorage.getItem('acces_token');
  return user ? JSON.parse(user)?.id : null;
  }

  public getUserProfile(id: string): Observable<IUserSignUpResponse> {
    return this.httpClient.get<IUserSignUpResponse>(`${environment.authApiUrl}/user-profile/${id}`);
  }

}
