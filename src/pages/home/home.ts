import { topCountries } from "./../../app/service/countriesData";
import { SourcePage } from "./../source-page/source";
import { SplashScreen } from "@ionic-native/splash-screen";
import { NewsServiceService } from "./../../app/service/news-service.service";
import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  initialList = [];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private newsService: NewsServiceService,
    private splashScreen: SplashScreen
  ) {
    this.initialList = topCountries;
  }

  ngOnInit(): void {}

  // getTopNews(country: string) {
  //   let loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 2000
  //   });
  //   loader.present();
  //   this.newsService.get20TrendingNewsByCountry(country).subscribe(
  //     data => {
  //       console.log("data", data);
  //       data = data["articles"];
  //       this.splashScreen.hide();
  //     },
  //     error => {
  //       console.log("Error", error);
  //     }
  //   );

  //   setTimeout(() => {
  //     loader.dismiss();
  //   }, 1000);
  // }

  itemTapped(event, item, index) {
    // That's right, we're pushing to ourselves!

    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    //   duration: 2000
    // });
    // loader.present();

    this.navCtrl.push(SourcePage, {
      countryCode: item.id,
      country: item.country,
      index: index
    });

    // setTimeout(() => {
    //   loader.dismiss();
    // }, 2000);
  }
}
