import { Article } from "./../../app/models/model";
import { NewsServiceService } from "./../../app/service/news-service.service";
import { Component, OnInit } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";

@Component({
  selector: "page-source",
  templateUrl: "source.html"
})
export class SourcePage implements OnInit {
  country: any;
  countryName: any;

  articles: Article[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.country = navParams.get("countryCode");
    this.countryName = navParams.get("country");

    this.getNewsByCountry(this.country);
  }

  ngOnInit(): void {}

  getNewsByCountry(country: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.get20TrendingNewsByCountry(country);
    x.subscribe(
      data => {
        this.articles = [];
        this.articles = data["articles"];
      },
      error => {
        this.service.errorFunction();
      }
    );

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
  }
}
