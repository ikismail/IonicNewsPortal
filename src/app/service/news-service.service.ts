import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
@Injectable()
export class NewsServiceService {
  private API_KEY = "10ad575c68f24879949f89147d38c9ce";
  private HEADLINE_API = "https://newsapi.org/v2/top-headlines";

  HEADER = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.HEADER = this.HEADER.append("Authorization", "Bearer " + this.API_KEY);
  }

  get20TrendingNewsByCountry(country: string) {
    let params = new HttpParams();
    params = params.set("country", country);
    console.log("params", params);
    return this.http.get(this.HEADLINE_API, {
      params: params,
      headers: this.HEADER
    });
  }
}
