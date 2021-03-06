import { Injectable } from '@angular/core';
import { IGame } from '../game'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HistoryService {
  private _gamesUrl = 'http://localhost:8000/api/games';

  constructor(private _http: Http) {}

  getGames(): Observable<IGame[]> {
    return this._http.get(this._gamesUrl)
      .map((response: Response) => <IGame[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  };
}
