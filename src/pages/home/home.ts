import { SplashScreen } from "@ionic-native/splash-screen";
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
    private newsService: NewsServiceService,
    private splashScreen: SplashScreen
  ) {
    this.getTopNews("us");
  }

  getTopNews(country: string) {
    this.splashScreen.show();
    this.newsService.get20TrendingNewsByCountry(country).subscribe(
      data => {
        console.log("data", data);
        data = data["articles"];
        this.splashScreen.hide();
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
