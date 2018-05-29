import { NewsServiceService } from "./../../app/service/news-service.service";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  initialList = [];

  constructor(
    public navCtrl: NavController,
    private newsService: NewsServiceService
  ) {
    this.getTopNews();
  }

  getTopNews() {
    this.newsService.get20TrendingNewsByCountry("us").subscribe(data => {
      console.log("data", data);
    });
  }
}
