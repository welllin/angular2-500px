import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.search('cat').subscribe((data) => {
      console.log(data);
    })
  }
}
