webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_news_country_news__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_countriesData__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryPage = /** @class */ (function () {
    function CountryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.countries = [];
        this.countries = __WEBPACK_IMPORTED_MODULE_3__app_service_countriesData__["a" /* countries_list */];
        console.log("countries", this.countries);
    }
    CountryPage.prototype.ngOnInit = function () { };
    CountryPage.prototype.itemTapped = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__country_news_country_news__["a" /* CountryNewsPage */], {
            country: item
        });
    };
    CountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-countries",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\countries\countries.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Countries\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col *ngFor="let country of countries" (click)="itemTapped(country)">\n\n                <ion-img width="80" height="80" [src]="country.flag"></ion-img>\n\n                <p style="margin: 0">{{country.name}}</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\countries\countries.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CountryPage);
    return CountryPage;
}());

//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_news_service_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryNewsPage = /** @class */ (function () {
    function CountryNewsPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.articles = [];
        console.log(navParams.get("country"));
        this.countryName = navParams.get("country")["name"];
        this.getNewsByCountry(navParams.get("country")["code"]);
    }
    CountryNewsPage.prototype.ngOnInit = function () {
        $(".owl-carousel").owlCarousel({
            margin: 10,
            loop: true,
            autoWidth: true,
            items: 4,
            nav: false,
            dots: false
        });
    };
    CountryNewsPage.prototype.getNewsByCountry = function (countryCode) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 2000
        });
        loader.present();
        var x = this.service.get20TrendingNewsByCountry(countryCode);
        x.subscribe(function (data) {
            _this.articles = [];
            _this.articles = data["articles"];
        }, function (error) {
            _this.service.errorFunction();
        });
        setTimeout(function () {
            loader.dismiss();
        }, 1000);
    };
    CountryNewsPage.prototype.getNewsByCategory = function (category) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 2000
        });
        loader.present();
        var x = this.service.getNewsByCatCountCode(category, this.navParams.get("country")["code"], 1);
        x.subscribe(function (data) {
            _this.articles = [];
            _this.articles = data["articles"];
        }, function (error) {
            _this.service.errorFunction();
        });
        setTimeout(function () {
            loader.dismiss();
        }, 1000);
    };
    CountryNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-country-news",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\country-news\country-news.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{countryName}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n    <!-- Set up your HTML -->\n\n    <div class="owl-carousel owl-theme" style="margin-top: 15px; padding: 10px">\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'general\')">\n\n            <img src="http://placehold.it/250x70/3f51b5/fff?text=World" alt="">\n\n        </div>\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'business\')">\n\n            <img src="http://placehold.it/250x70/673ab7/fff?text=Business" alt="">\n\n        </div>\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'entertainment\')">\n\n            <img src="http://placehold.it/250x70/db4437/fff?text=Entertain" alt="">\n\n        </div>\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'health\')">\n\n            <img src="http://placehold.it/250x70/e91e63/fff?text=Health" alt="">\n\n        </div>\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'science\')">\n\n            <img src="http://placehold.it/250x70/673ab7/fff?text=Science" alt="">\n\n        </div>\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'sports\')">\n\n            <img src="http://placehold.it/250x70/009688/fff?text=Sports" alt="">\n\n        </div>\n\n        <div class="item" style="width: 150px" (click)="getNewsByCategory(\'technology\')">\n\n            <img src="http://placehold.it/250x70/db4437/fff?text=Technology" alt="">\n\n        </div>\n\n    </div>\n\n\n\n    <h4 ion-text color="primary" style="margin-left: 10px">Top Headlines</h4>\n\n\n\n    <ion-card *ngFor="let article of articles">\n\n        <div *ngIf="article.urlToImage !== null else noImage">\n\n            <img [src]="article.urlToImage" [alt]="article.url" />\n\n        </div>\n\n        <ng-template #noImage>\n\n            <img src="https://newprojects.99acres.com/projects/divya_infrastructure/divya_baleshwar_heights/images/photo_not_available.gif"\n\n                alt="No Image to Show" />\n\n        </ng-template>\n\n\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                <h3 style="  font-size: 16px;\n\n                font-weight: 500;\n\n                color: darkred;">{{article.title}}</h3>\n\n            </ion-card-title>\n\n            {{article.description}}\n\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n            <ion-col text-right>\n\n                <button ion-button clear small color="primary" icon-start>\n\n                    <ion-icon name=\'share-alt\'></ion-icon>\n\n                    Share\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\country-news\country-news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_news_service_service__["a" /* NewsServiceService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]])
    ], CountryNewsPage);
    return CountryNewsPage;
}());

//# sourceMappingURL=country-news.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return topCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countries_list; });
var topCountries = [
    {
        id: "us",
        imgSrc: "https://image.ibb.co/n34FUd/america.jpg",
        country: "States Trends",
        newsList: 20
    },
    {
        id: "in",
        imgSrc: "https://image.ibb.co/hMR7aJ/india.jpg",
        country: "Indian Trends",
        newsList: 20
    },
    {
        id: "jp",
        imgSrc: "https://image.ibb.co/hbvdhy/japan.jpg",
        country: "Japan Trends",
        newsList: 20
    },
    {
        id: "at",
        imgSrc: "https://image.ibb.co/jj0ppd/australia.jpg",
        country: "Australia Trends",
        newsList: 20
    },
    {
        id: "ca",
        imgSrc: "https://image.ibb.co/nriW2y/canada.jpg",
        country: "Canada Trends",
        newsList: 20
    }
];
/* List of Countries */
var countries_list = [
    {
        name: "Argentina",
        code: "ar",
        flag: "https://newsapi.org/images/flags/ar.svg"
    },
    {
        name: "Australia",
        code: "au",
        flag: "https://newsapi.org/images/flags/au.svg"
    },
    {
        name: "Austria",
        code: "at",
        flag: "https://newsapi.org/images/flags/at.svg"
    },
    {
        name: "Belgium",
        code: "be",
        flag: "https://newsapi.org/images/flags/be.svg"
    },
    {
        name: "Brazil",
        code: "br",
        flag: "https://newsapi.org/images/flags/br.svg"
    },
    {
        name: "Bulgaria  ",
        code: "bg",
        flag: "https://newsapi.org/images/flags/bg.svg"
    },
    {
        name: "Canada  ",
        code: "ca",
        flag: "https://newsapi.org/images/flags/ca.svg"
    },
    {
        name: "China",
        code: "cn",
        flag: "https://newsapi.org/images/flags/cn.svg"
    },
    {
        name: "Colombia",
        code: "co",
        flag: "https://newsapi.org/images/flags/co.svg"
    },
    { name: "Cuba", code: "cu", flag: "https://newsapi.org/images/flags/cu.svg" },
    {
        name: "Czech Republic",
        code: "cz",
        flag: "https://newsapi.org/images/flags/cz.svg"
    },
    {
        name: "Egypt",
        code: "eg",
        flag: "https://newsapi.org/images/flags/eg.svg"
    },
    {
        name: "France",
        code: "fr",
        flag: "https://newsapi.org/images/flags/fr.svg"
    },
    {
        name: "Germany",
        code: "de",
        flag: "https://newsapi.org/images/flags/de.svg"
    },
    {
        name: "Greece",
        code: "gr",
        flag: "https://newsapi.org/images/flags/gr.svg"
    },
    {
        name: "Hong Kong",
        code: "hk",
        flag: "https://newsapi.org/images/flags/hk.svg"
    },
    {
        name: "Hungary",
        code: "hu",
        flag: "https://newsapi.org/images/flags/hu.svg"
    },
    {
        name: "India",
        code: "in",
        flag: "https://newsapi.org/images/flags/in.svg"
    },
    {
        name: "Indonesia",
        code: "id",
        flag: "https://newsapi.org/images/flags/id.svg"
    },
    {
        name: "Ireland",
        code: "ie",
        flag: "https://newsapi.org/images/flags/ie.svg"
    },
    {
        name: "Israel",
        code: "il",
        flag: "https://newsapi.org/images/flags/il.svg"
    },
    {
        name: "Italy",
        code: "it",
        flag: "https://newsapi.org/images/flags/it.svg"
    },
    {
        name: "Japan",
        code: "jp",
        flag: "https://newsapi.org/images/flags/jp.svg"
    },
    {
        name: "Latvia",
        code: "lv",
        flag: "https://newsapi.org/images/flags/lv.svg"
    },
    {
        name: "Lithuania",
        code: "lt",
        flag: "https://newsapi.org/images/flags/lt.svg"
    },
    {
        name: "Malaysia",
        code: "my",
        flag: "https://newsapi.org/images/flags/my.svg"
    },
    {
        name: "Mexico",
        code: "mx",
        flag: "https://newsapi.org/images/flags/mx.svg"
    },
    {
        name: "Morocco",
        code: "ma",
        flag: "https://newsapi.org/images/flags/ma.svg"
    },
    {
        name: "Netherlands",
        code: "nl",
        flag: "https://newsapi.org/images/flags/nl.svg"
    },
    {
        name: "New Zealand",
        code: "nz",
        flag: "https://newsapi.org/images/flags/nz.svg"
    },
    {
        name: "Nigeria",
        code: "ng",
        flag: "https://newsapi.org/images/flags/ng.svg"
    },
    {
        name: "Norway",
        code: "no",
        flag: "https://newsapi.org/images/flags/no.svg"
    },
    {
        name: "Philippines",
        code: "ph",
        flag: "https://newsapi.org/images/flags/ph.svg"
    },
    {
        name: "Poland",
        code: "pl",
        flag: "https://newsapi.org/images/flags/pl.svg"
    },
    {
        name: "Portugal",
        code: "pt",
        flag: "https://newsapi.org/images/flags/pt.svg"
    },
    {
        name: "Romania",
        code: "ro",
        flag: "https://newsapi.org/images/flags/ro.svg"
    },
    {
        name: "Russia",
        code: "ru",
        flag: "https://newsapi.org/images/flags/ru.svg"
    },
    {
        name: "Saudi Arabia",
        code: "sa",
        flag: "https://newsapi.org/images/flags/sa.svg"
    },
    {
        name: "Serbia",
        code: "rs",
        flag: "https://newsapi.org/images/flags/rs.svg"
    },
    {
        name: "Singapore",
        code: "sg",
        flag: "https://newsapi.org/images/flags/sg.svg"
    },
    {
        name: "Solavakia",
        code: "sk",
        flag: "https://newsapi.org/images/flags/sk.svg"
    },
    {
        name: "Slovenia",
        code: "si",
        flag: "https://newsapi.org/images/flags/si.svg"
    },
    {
        name: "South Africa",
        code: "za",
        flag: "https://newsapi.org/images/flags/za.svg"
    },
    {
        name: "South Korea",
        code: "kr",
        flag: "https://newsapi.org/images/flags/kr.svg"
    },
    {
        name: "Sweden",
        code: "se",
        flag: "https://newsapi.org/images/flags/se.svg"
    },
    {
        name: "Switzerland",
        code: "ch",
        flag: "https://newsapi.org/images/flags/ch.svg"
    },
    {
        name: "Taiwan",
        code: "tw",
        flag: "https://newsapi.org/images/flags/tw.svg"
    },
    {
        name: "Thailand",
        code: "th",
        flag: "https://newsapi.org/images/flags/th.svg"
    },
    {
        name: "Turkey",
        code: "tr",
        flag: "https://newsapi.org/images/flags/tr.svg"
    },
    { name: "UAE", code: "ae", flag: "https://newsapi.org/images/flags/ae.svg" },
    {
        name: "Ukraine",
        code: "ua",
        flag: "https://newsapi.org/images/flags/ua.svg"
    },
    {
        name: "United Kingdom",
        code: "gb",
        flag: "https://newsapi.org/images/flags/gb.svg"
    },
    {
        name: "United States",
        code: "us",
        flag: "https://newsapi.org/images/flags/us.svg"
    },
    {
        name: "Venuzuela",
        code: "ve",
        flag: "https://newsapi.org/images/flags/ve.svg"
    }
];
//# sourceMappingURL=countriesData.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__countries_countries__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_categories__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__categories_categories__["a" /* CategoriesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__countries_countries__["a" /* CountryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Trends" tabIcon="trending-up"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="logo-buffer"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Countries" tabIcon="globe"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_news_page_cat_news_page__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CategoriesPage.prototype.itemTapped = function (query) {
        console.log("item tapped", query);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_news_page_cat_news_page__["a" /* CatNewsPage */], {
            query: query
        });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-category",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\categories\categories.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Categories\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-card (click)="itemTapped(\'general\')">\n\n                    <img src="https://image.ibb.co/bsXr2y/world.jpg" width="100%" height="150px" />\n\n                    <div class="card-title">World</div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-card (click)="itemTapped(\'business\')">\n\n                    <img src="https://image.ibb.co/cfH8hy/business.jpg" />\n\n                    <div class="card-title">Business</div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-card (click)="itemTapped(\'entertainment\')">\n\n                    <img src="https://image.ibb.co/djLiFJ/entertainment.jpg" />\n\n                    <div class="card-title">Entertainment</div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <ion-card (click)="itemTapped(\'health\')">\n\n                    <img src="https://image.ibb.co/jsvRQJ/health.jpg" width="100%" height="150px" />\n\n                    <div class="card-title">Health</div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-card (click)="itemTapped(\'sports\')">\n\n                    <img src="https://image.ibb.co/kVOg2y/sports.jpg" />\n\n                    <div class="card-title">Sports</div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <ion-card (click)="itemTapped(\'technology\')">\n\n                    <img src="https://image.ibb.co/hY0dhy/technology.jpg" />\n\n                    <div class="card-title">Technology</div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\categories\categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_news_service_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatNewsPage = /** @class */ (function () {
    function CatNewsPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.articles = [];
        this.isError = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.query = navParams.get("query");
        console.log("query navparam", this.query);
        this.getNewsBasedOnQuery(this.query);
    }
    CatNewsPage.prototype.ngOnInit = function () { };
    CatNewsPage.prototype.getNewsBasedOnQuery = function (category) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 2000
        });
        loader.present();
        var x = this.service.getNewsByCategory(category, 1);
        x.subscribe(function (data) {
            _this.articles = [];
            _this.articles = data["articles"];
        }, function (error) {
            _this.service.errorFunction();
        });
        setTimeout(function () {
            loader.dismiss();
        }, 1000);
    };
    CatNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cat-news",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\category-news-page\cat-news-page.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{query.slice(0,1).toUpperCase() + query.slice(1, query.length)}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg" *ngIf="!isError">\n\n\n\n    <ion-card *ngFor="let article of articles">\n\n        <div *ngIf="article.urlToImage !== null else noImage">\n\n            <img [src]="article.urlToImage" [alt]="article.url" />\n\n        </div>\n\n        <ng-template #noImage>\n\n            <img src="https://newprojects.99acres.com/projects/divya_infrastructure/divya_baleshwar_heights/images/photo_not_available.gif"\n\n                alt="No Image to Show" />\n\n        </ng-template>\n\n\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                <h3 style="  font-size: 16px;\n\n                font-weight: 500;\n\n                color: darkred;">{{article.title}}</h3>\n\n            </ion-card-title>\n\n            {{article.description}}\n\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n            <ion-col text-right>\n\n                <button ion-button clear small color="primary" icon-start>\n\n                    <ion-icon name=\'share-alt\'></ion-icon>\n\n                    Share\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\category-news-page\cat-news-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_news_service_service__["a" /* NewsServiceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CatNewsPage);
    return CatNewsPage;
}());

//# sourceMappingURL=cat-news-page.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
        this.conferenceDate = "2018-06-27";
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-about",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/ionic-app.svg" alt="ionic logo">\n  </div>\n  <div padding class="about-info">\n    <h4>News Hub Ionic App</h4>\n    <p>\n      The Ionic News Application is News Portal Application featuring news form the newsapi. It is focused on Ionic applications\n      being built with Ionic 3. This includes Angular concepts, Webpack, sass and many other technologies used in Ionic 3.\n    </p>\n\n    <ion-grid>\n      <h6>Developed by</h6>\n      <ion-row style="font-size: 20px">\n        <ion-col col-12>\n          <ion-icon name="person"></ion-icon>\n          <span class="hightlight">Mohammed Ismail</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-icon name="globe"></ion-icon>\n          <a href="https://ikismail.github.io" target="_blank">\n            <span class="hightlight">ikismail.github.io</span>\n          </a>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-icon name="mail"></ion-icon>\n          <a href="mailto:ikismail7@gmail.com" target="_blank">\n            <span class="hightlight">ikismail7@gmail.com</span>\n          </a>\n        </ion-col>\n        <ion-col col-6>\n          <ion-icon name="logo-whatsapp"></ion-icon>\n          <a href="https://api.whatsapp.com/send?phone=918124794942">\n            <span class="hightlight">+91-8124794942</span>\n          </a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_modal_news_search_modal_news__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service_countriesData__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_page_source__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.initialList = [];
        this.initialList = __WEBPACK_IMPORTED_MODULE_1__app_service_countriesData__["b" /* topCountries */];
    }
    HomePage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__search_modal_news_search_modal_news__["a" /* SearchNewsPage */]);
        modal.present();
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.itemTapped = function (item, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__source_page_source__["a" /* SourcePage */], {
            countryCode: item.id,
            country: item.country,
            index: index
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Trending News\n      <ion-icon name="search" (click)="openModal()"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card *ngFor="let source of initialList; let i=index" (click)="itemTapped(source, i)">\n    <img [src]="source.imgSrc" />\n    <div class="card-title">{{source.country}}</div>\n    <div class="card-subtitle">{{source.newsList}} Hot News</div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_news_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchNewsPage = /** @class */ (function () {
    function SearchNewsPage(navCtrl, service, loadingCtrl, keyboard) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.keyboard = keyboard;
        this.articles = [];
    }
    SearchNewsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchBar.setFocus();
            _this.keyboard.show();
        }, 150);
    };
    SearchNewsPage.prototype.ngOnInit = function () { };
    SearchNewsPage.prototype.getItems = function (ev) {
        var _this = this;
        // set val to the value of the searchbar
        var query = ev.target.value;
        console.log("query", query);
        if (query && query.trim() != "") {
            var x = this.service.getNewsByQuery(query, 1);
            x.subscribe(function (data) {
                _this.articles = [];
                data["articles"].forEach(function (article) {
                    _this.articles.push(article);
                    console.log("Articles", _this.articles);
                });
            }, function (error) {
                _this.service.errorFunction();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Searchbar */])
    ], SearchNewsPage.prototype, "searchBar", void 0);
    SearchNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: "page-search",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\search-modal-news\search-modal-news.html"*/'<ion-content>\n\n    <ion-searchbar #search (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-card *ngFor="let article of articles">\n\n        <div *ngIf="article.urlToImage !== null else noImage">\n\n            <img [src]="article.urlToImage" [alt]="article.url" />\n\n        </div>\n\n        <ng-template #noImage>\n\n            <img src="https://newprojects.99acres.com/projects/divya_infrastructure/divya_baleshwar_heights/images/photo_not_available.gif"\n\n                alt="No Image to Show" />\n\n        </ng-template>\n\n\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                <h3 style="  font-size: 16px;\n\n                    font-weight: 500;\n\n                    color: darkred;">{{article.title}}</h3>\n\n            </ion-card-title>\n\n            {{article.description}}\n\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n            <ion-col text-right>\n\n                <button ion-button clear small color="primary" icon-start>\n\n                    <ion-icon name=\'share-alt\'></ion-icon>\n\n                    Share\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\search-modal-news\search-modal-news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__app_service_news_service_service__["a" /* NewsServiceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], SearchNewsPage);
    return SearchNewsPage;
}());

//# sourceMappingURL=search-modal-news.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_news_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SourcePage = /** @class */ (function () {
    function SourcePage(navCtrl, navParams, service, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.articles = [];
        // If we navigated to this page, we will have an item available as a nav param
        this.country = navParams.get("countryCode");
        this.countryName = navParams.get("country");
        this.getNewsByCountry(this.country);
    }
    SourcePage.prototype.ngOnInit = function () { };
    SourcePage.prototype.getNewsByCountry = function (country) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 2000
        });
        loader.present();
        var x = this.service.get20TrendingNewsByCountry(country);
        x.subscribe(function (data) {
            _this.articles = [];
            _this.articles = data["articles"];
        }, function (error) {
            _this.service.errorFunction();
        });
        setTimeout(function () {
            loader.dismiss();
        }, 1000);
    };
    SourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-source",template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\pages\source-page\source.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{countryName}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n    <ion-card *ngFor="let article of articles">\n\n        <div *ngIf="article.urlToImage !== null else noImage">\n\n            <img [src]="article.urlToImage" [alt]="article.url" />\n\n        </div>\n\n        <ng-template #noImage>\n\n            <img src="https://newprojects.99acres.com/projects/divya_infrastructure/divya_baleshwar_heights/images/photo_not_available.gif"\n\n                alt="No Image to Show" />\n\n        </ng-template>\n\n\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                <h3 style="  font-size: 16px;\n\n                font-weight: 500;\n\n                color: darkred;">{{article.title}}</h3>\n\n            </ion-card-title>\n\n            {{article.description}}\n\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n            <ion-col text-right>\n\n                <button ion-button clear small color="primary" icon-start>\n\n                    <ion-icon name=\'share-alt\'></ion-icon>\n\n                    Share\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\pages\source-page\source.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__app_service_news_service_service__["a" /* NewsServiceService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], SourcePage);
    return SourcePage;
}());

//# sourceMappingURL=source.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_countries_countries__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_news_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_category_news_page_cat_news_page__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_categories_categories__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_country_news_country_news__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_source_page_source__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_modal_news_search_modal_news__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_source_page_source__["a" /* SourcePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_category_news_page_cat_news_page__["a" /* CatNewsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_modal_news_search_modal_news__["a" /* SearchNewsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_countries_countries__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_country_news_country_news__["a" /* CountryNewsPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_category_news_page_cat_news_page__["a" /* CatNewsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_source_page_source__["a" /* SourcePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_modal_news_search_modal_news__["a" /* SearchNewsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_countries_countries__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_country_news_country_news__["a" /* CountryNewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_7__service_news_service_service__["a" /* NewsServiceService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEWS_API_KEY; });
var NEWS_API_KEY = "10ad575c68f24879949f89147d38c9ce";
//# sourceMappingURL=environmentDummy.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(true);
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ismail\Personal\newsApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"E:\Ismail\Personal\newsApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_environmentDummy__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsServiceService = /** @class */ (function () {
    function NewsServiceService(http, toastCtrl, app) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.API_KEY = __WEBPACK_IMPORTED_MODULE_0__assets_environmentDummy__["a" /* NEWS_API_KEY */];
        this.HEADLINE_API = "https://newsapi.org/v2/top-headlines";
        this.EVERYTHING_API = "https://newsapi.org/v2/everything";
        this.HEADER = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
        this.HEADER = this.HEADER.append("Authorization", "Bearer " + this.API_KEY);
    }
    NewsServiceService.prototype.get20TrendingNewsByCountry = function (country) {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        params = params.set("country", country);
        return this.http.get(this.HEADLINE_API, {
            params: params,
            headers: this.HEADER
        });
    };
    NewsServiceService.prototype.getNewsByCategory = function (category, page) {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        params = params
            .set("page", page)
            .set("country", "in")
            .set("category", category);
        console.log("params", params);
        return this.http.get(this.HEADLINE_API, {
            params: params,
            headers: this.HEADER
        });
    };
    NewsServiceService.prototype.getNewsByCatCountCode = function (category, countryCode, page) {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        params = params
            .set("page", page)
            .set("country", countryCode)
            .set("category", category);
        console.log("params", params);
        return this.http.get(this.HEADLINE_API, {
            params: params,
            headers: this.HEADER
        });
    };
    NewsServiceService.prototype.getNewsByQuery = function (query, page) {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        params = params.set("page", page).set("q", query);
        console.log("params", params);
        return this.http.get(this.EVERYTHING_API, {
            params: params,
            headers: this.HEADER
        });
    };
    NewsServiceService.prototype.errorFunction = function () {
        var toast = this.toastCtrl.create({
            message: "Sorry, Something went wrong, please try again later !!!",
            duration: 2000,
            position: "bottom"
        });
        toast.present(toast);
        this.app.getActiveNav().pop();
    };
    NewsServiceService.prototype.developedBy = function () {
        var toast = this.toastCtrl.create({
            message: "Developed by Mohammed Ismail (ikismail)",
            duration: 2000,
            position: "bottom"
        });
        toast.present(toast);
    };
    NewsServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], NewsServiceService);
    return NewsServiceService;
}());

//# sourceMappingURL=news-service.service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map