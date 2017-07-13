"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Item = (function () {
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
        this.del = false;
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Хлеб", done: false, del: false, price: 15.8 },
            { purchase: "Масло", done: false, del: false, price: 60 },
            { purchase: "Картофель", done: true, del: false, price: 22.6 },
            { purchase: "Сыр", done: false, del: false, price: 310 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
        this.inp.nativeElement.value = '';
        this.num.nativeElement.value = '';
    };
    ;
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('inp'),
    __metadata("design:type", HTMLElement)
], AppComponent.prototype, "inp", void 0);
__decorate([
    core_1.ViewChild('num'),
    __metadata("design:type", HTMLElement)
], AppComponent.prototype, "num", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app',
        template: "<div class=\"panel\">\n        <h1>\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A</h1>\n    </div>\n    <div class=\"panel\">\n        <div class=\"form-inline\">\n            <div class=\"form-group\">\n                <div class=\"col-md-8\">\n                    <input type=\"text\" #inp [(ngModel)]=\"text\" class=\"form-control\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-6\">\n                    <input type='number' #num [(ngModel)]=\"price\" class=\"form-control\" placeholder=\"\u0426\u0435\u043D\u0430\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(text, price)\" >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\u041F\u0440\u0435\u0434\u043C\u0435\u0442</th>\n                    <th>\u0426\u0435\u043D\u0430</th>\n                    <th>\u041A\u0443\u043F\u043B\u0435\u043D\u043E</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\" [ngClass]=\"{line: item.done, deleteItem: item.del}\" > \n                    <td>{{item.purchase}}</td>\n                    <td>{{item.price}}</td>\n                    <td><input type=\"checkbox\" [(ngModel)]=\"item.done\"></td>\n                    <td><button class=\"btn btn-danger\" (click)=\"item.del = !item.del\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>",
        styles: [
            ".line { text-decoration:line-through }\n        .deleteItem { display: none }"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map