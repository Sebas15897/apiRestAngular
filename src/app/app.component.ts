import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  delete = '';
  element = [];
  constructor(public data: ApiService) {
    this.data.getData().subscribe((res) => {
      this.element = res;
      console.log(this.element);
    });
  };

  removeData() {
    this.data.removeData().subscribe(x => console.log(x));
  }
}
