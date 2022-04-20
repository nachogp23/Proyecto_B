import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto_B';
  public isLoading = false;

  constructor(private loading: LoadingService) {
    loading.isLoading.subscribe(isLoading => this.isLoading = isLoading);
  }
}
