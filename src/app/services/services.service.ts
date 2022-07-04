import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { APIResponse, Game } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

constructor(private http: HttpClient) { }

getGamesList(): Observable<APIResponse<Game>> {
  return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`).pipe(
    map(retorno => retorno)
  );
};

/*getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
  let params = new HttpParams().set('ordering', ordering);

  if(search) {
    params = new HttpParams().set(ordering, ordering).set('search', search);
  }

  return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
    params: params,
  });
}*/

}
