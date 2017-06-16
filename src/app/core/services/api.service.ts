import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class ApiService {
    protected api: string = environment.api;
    protected key: string = environment.key;
    protected image_size = 440;
    protected rpp = 20;
    protected sort = 'highest_rating';

    constructor(protected http: Http) { }

    search(term: string): Observable<any[]> {
        
    }

    handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

