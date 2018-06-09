import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CatNewsPage } from "../category-news-page/cat-news-page";

@Component({
  selector: "page-category",
  templateUrl: "categories.html"
})
export class CategoriesPage {
  constructor(public navCtrl: NavController) {}

  itemTapped(query) {
    console.log("item tapped", query);

    this.navCtrl.push(CatNewsPage, {
      query: query
    });
  }
}
