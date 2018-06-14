import { SearchNewsPage } from "./../search-modal-news/search-modal-news";
import { topCountries } from "./../../app/service/countriesData";
import { SourcePage } from "./../source-page/source";
import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  initialList = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.initialList = topCountries;
  }

  openModal() {
    let modal = this.modalCtrl.create(SearchNewsPage);
    modal.present();
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
