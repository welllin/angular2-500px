import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';
import { snakeCase } from 'lodash';

@Injectable()
export class ApiService {
    protected api: string = environment.api;
    protected key: string = environment.key;
    protected image_size = '440';
    protected rpp = '40';
    protected sort = 'highest_rating';

    constructor(protected http: Http) { }

    search(term: string): Observable<any[]> {
        const url = `${this.api}?term=${term}&rpp=${this.rpp}&image_size=${this.image_size}&sort=${this.sort}&consumer_key=${this.key}`;

        return this.http.get(url).map((response: Response) => {
            return <any>response.json();
        }).catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

