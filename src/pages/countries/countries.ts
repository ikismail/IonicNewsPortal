import { NavController } from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import { countries_list } from "../../app/service/countriesData";

@Component({
  selector: "pages-countries",
  templateUrl: "countries.html"
})
export class CountryPage implements OnInit {
  countries = [];
  constructor(public navCtrl: NavController) {
    this.countries = countries_list;
    console.log("countries", this.countries);
  }

  ngOnInit() {}
}
