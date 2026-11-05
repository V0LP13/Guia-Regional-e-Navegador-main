import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepserviceService {
  private apiEndpoint: string = 'https://brasilapi.com.br/api/cep/v2/';

  constructor(private httpClient: HttpClient) {}

  public getCEP(cep: string) {
    return this.httpClient.get(`${this.apiEndpoint}${cep}`);
  }

  public pesquisarCEP(cep: string) {
    return this.getCEP(cep);
  }
}
