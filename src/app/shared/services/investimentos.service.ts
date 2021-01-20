import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Investimento} from '../models/investimento';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosService {

  constructor(
    private http: HttpClient,
  ) {}

  public getInvestimentos(): Observable<Investimento[]> {
    return this.http.get(`${environment.urlInvestimentos}/5e76797e2f0000f057986099`).pipe(
      // @ts-ignore
      map(e => e.response.data.listaInvestimentos)
    );
  }
}
