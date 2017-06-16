import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ApiService } from 'app/core/services/api.service';
import { IData } from 'app/core/types/Data';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private data: IData[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }

  search(term: string): any {
    this.apiService.search(term).subscribe((data) => {
      return data;
    });
  }
}
