import {Component, ViewChild} from '@angular/core';

export class Item {
    purchase: string;
    done: boolean;
    del: boolean;
    price: number;


    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
        this.del = false
    }
}

@Component({
    selector: 'purchase-app',
    template: `<div class="panel">
        <h1>Список покупок</h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input type="text" #inp [(ngModel)]="text" class="form-control" placeholder="Название">
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type='number' #num [(ngModel)]="price" class="form-control" placeholder="Цена">
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)" >Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items" [ngClass]="{line: item.done, deleteItem: item.del}" > 
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done"></td>
                    <td><button class="btn btn-danger" (click)="item.del = !item.del">Удалить</button></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    styles: [
        `.line { text-decoration:line-through }
        .deleteItem { display: none }`
    ]
})
export class AppComponent {
    @ViewChild('inp')
        inp: HTMLElement;
    @ViewChild('num')
        num: HTMLElement;


    items: Item[] =
        [
            { purchase: "Хлеб", done: false,del:false, price: 15.8 },
            { purchase: "Масло", done: false,del:false, price: 60 },
            { purchase: "Картофель", done: true,del:false, price: 22.6 },
            { purchase: "Сыр", done: false,del:false, price: 310 }
        ];

    addItem(text: string, price:number):void {
        if(text == null || text == undefined || text.trim() == "")
            return;

        if(price == null || price == undefined)
            return;

        this.items.push(new Item(text, price));
        this.inp.nativeElement.value = '';
        this.num.nativeElement.value = '';

    };


}