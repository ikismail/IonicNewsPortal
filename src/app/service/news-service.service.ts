import { NEWS_API_KEY } from "./../../assets/environmentDummy";
import { ToastController, App } from "ionic-angular";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
@Injectable()
export class NewsServiceService {
  private API_KEY = NEWS_API_KEY;
  private HEADLINE_API = "https://newsapi.org/v2/top-headlines";
  private EVERYTHING_API = "https://newsapi.org/v2/everything";

  HEADER = new HttpHeaders();

  constructor(
    private http: HttpClient,
    public toastCtrl: ToastController,
    private app: App
  ) {
    this.HEADER = this.HEADER.append("Authorization", "Bearer " + this.API_KEY);
  }

  get20TrendingNewsByCountry(country: string) {
    let params = new HttpParams();
    params = params.set("country", country);
    return this.http.get(this.HEADLINE_API, {
      params: params,
      headers: this.HEADER
    });
  }

  getNewsByCategory(category: string, page: any) {
    let params = new HttpParams();
    params = params
      .set("page", page)
      .set("country", "in")
      .set("category", category);
    console.log("params", params);
    return this.http.get(this.HEADLINE_API, {
      params: params,
      headers: this.HEADER
    });
  }

  getNewsByQuery(query: string, page: any) {
    let params = new HttpParams();
    params = params.set("page", page).set("q", query);
    console.log("params", params);
    return this.http.get(this.EVERYTHING_API, {
      params: params,
      headers: this.HEADER
    });
  }

  errorFunction() {
    let toast = this.toastCtrl.create({
      message: "Sorry, Something went wrong, please try again later !!!",
      duration: 2000,
      position: "bottom"
    });

    toast.present(toast);

    this.app.getActiveNav().pop();
  }

  developedBy() {
    let toast = this.toastCtrl.create({
      message: "Developed by Mohammed Ismail (ikismail)",
      duration: 2000,
      position: "bottom"
    });

    toast.present(toast);
  }
}
