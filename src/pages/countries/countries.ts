import { CountryNewsPage } from "./../country-news/country-news";
import { NavController } from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import { countries_list } from "../../app/service/countriesData";

@Component({
  selector: "page-countries",
  templateUrl: "countries.html"
})
export class CountryPage implements OnInit {
  countries = [];
  constructor(public navCtrl: NavController) {
    this.countries = countries_list;
    console.log("countries", this.countries);
  }

  ngOnInit() {}

  itemTapped(item) {
    this.navCtrl.push(CountryNewsPage, {
      country: item
    });
  }
}
