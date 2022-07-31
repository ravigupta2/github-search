import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = '';
  constructor(public http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  /**
   * @param {string} string
   * @return Observable
   * @Description : get repository from search string
   */
  getRepos = (string: string) => {
    const url = this.apiUrl + `search/repositories?q={${string}}`;
    return this.http.get(url);
  }

  /**
   * @param {string} string
   * @return Observable
   * @Description : get repository from search string
   */
  getUsers = (string: string) => {
    const url = this.apiUrl + `search/users?q={${string}}`;
    return this.http.get(url);
  }
}
