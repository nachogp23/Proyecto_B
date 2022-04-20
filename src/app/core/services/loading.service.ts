import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading: ReplaySubject<boolean> = new ReplaySubject();

  constructor() { }

  public startLoading () {
    this.isLoading.next(true);
  }

  public stopLoading () {
    this.isLoading.next(false);
  }
}
