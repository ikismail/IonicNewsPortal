import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import { NewsServiceService } from "../../app/service/news-service.service";
import { Article } from "../../app/models/model";
declare var $: any;
@Component({
  selector: "page-country-news",
  templateUrl: "country-news.html"
})
export class CountryNewsPage implements OnInit {
  articles: Article[] = [];
  countryName: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController
  ) {
    console.log(navParams.get("country"));
    this.countryName = navParams.get("country")["name"];

    this.getNewsByCountry(navParams.get("country")["code"]);
  }

  ngOnInit() {
    $(".owl-carousel").owlCarousel({
      margin: 10,
      loop: true,
      autoWidth: true,
      items: 4,
      nav: false,
      dots: false
    });
  }

  getNewsByCountry(countryCode: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.get20TrendingNewsByCountry(countryCode);
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

  getNewsByCategory(category: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.getNewsByCatCountCode(
      category,
      this.navParams.get("country")["code"],
      1
    );
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
