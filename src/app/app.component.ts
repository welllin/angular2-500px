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
  private term: string;
  private data: IData[];
  private loading = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }

  search(): any {
    if (this.term) {
      this.data = [];
      this.loading = true;

      this.apiService.search(this.term).subscribe((data) => {
        this.data = data;
        this.loading = false;
        console.log(data);
      });
    }
  }
}
