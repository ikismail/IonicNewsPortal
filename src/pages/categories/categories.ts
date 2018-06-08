import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CatNewsPage } from "../category-news-page/cat-news-page";

@Component({
  selector: "page-category",
  templateUrl: "categories.html"
})
export class CategoriesPage {
  constructor(public navCtrl: NavController) {}

  itemTapped(item, index) {
    this.navCtrl.push(CatNewsPage, {
      countryCode: item.id,
      country: item.country,
      index: index
    });
  }
}
