import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import CONFIG from "../config/config";
import { BASE_URL } from "../const";

@Injectable({
  providedIn: "root",
})
export class OauthService {
  constructor(private httpClient: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    const body = { login, password };
    // return this.httpClient.post(`${BASE_URL}${CONFIG.LOGIN}`, body);
    return this.httpClient.post(`http://localhost:5000/authorization`, body);
  }
}
