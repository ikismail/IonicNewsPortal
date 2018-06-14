import { Article } from "./../../app/models/model";
import { NewsServiceService } from "./../../app/service/news-service.service";
import { NavController, LoadingController, Searchbar } from "ionic-angular";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Keyboard } from "@ionic-native/keyboard";
@Component({
  selector: "page-search",
  templateUrl: "search-modal-news.html"
})
export class SearchNewsPage implements OnInit {
  @ViewChild("search") searchBar: Searchbar;
  articles: Article[] = [];
  constructor(
    public navCtrl: NavController,
    private service: NewsServiceService,
    public loadingCtrl: LoadingController,
    private keyboard: Keyboard
  ) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchBar.setFocus();
      this.keyboard.show();
    }, 150);
  }

  ngOnInit() {}

  getItems(ev) {
    // set val to the value of the searchbar
    const query = ev.target.value;
    console.log("query", query);

    if (query && query.trim() != "") {
      const x = this.service.getNewsByQuery(query, 1);
      x.subscribe(
        data => {
          this.articles = [];
          data["articles"].forEach(article => {
            this.articles.push(article);
            console.log("Articles", this.articles);
          });
        },
        error => {
          this.service.errorFunction();
        }
      );
    }
  }
}
