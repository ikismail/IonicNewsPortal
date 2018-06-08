import { topCountries } from "./../../app/service/countriesData";
import { SourcePage } from "./../source-page/source";
import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  initialList = [];

  constructor(public navCtrl: NavController) {
    this.initialList = topCountries;
  }

  ngOnInit(): void {}

  itemTapped(item, index) {
    this.navCtrl.push(SourcePage, {
      countryCode: item.id,
      country: item.country,
      index: index
    });
  }
}
