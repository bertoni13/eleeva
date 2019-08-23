import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
@Injectable()
export class StateService {

	private url = 'https://servicodados.ibge.gov.br/api/v1/localidades';
  constructor(public http: Http, private jsonp: Jsonp) {}

  getState(){
    return this.http.get(
			this.url + `/estados`
		);
  }
}
