import { Article } from "./../../app/models/model";
import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { NewsServiceService } from "./../../app/service/news-service.service";
@Component({
  selector: "page-cat-news",
  templateUrl: "cat-news-page.html"
})
export class CatNewsPage implements OnInit {
  articles: Article[] = [];
  query: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.query = navParams.get("query");
    console.log("query navparam", this.query);

    this.getNewsBasedOnQuery(this.query);
  }

  ngOnInit(): void {}

  getNewsBasedOnQuery(query: string) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    const x = this.service.getNewsByQuery(query, 1);
    x.subscribe(data => {
      this.articles = [];
      this.articles = data["articles"];
    });

    setTimeout(() => {
      loader.dismiss();
    }, 1000);
  }
}
