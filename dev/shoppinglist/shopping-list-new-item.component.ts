import {Component} from '@angular/core';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {ListItem} from "../list-item";

@Component({
    selector: 'shopping-list-new-item',
    template:`
                <div class="input">
                        <label for="item-name">Name</label>
                            <input type="text" id="item-name" [(ngModel)]="item.name">
                        <label for="item-amount">Days</label>
                            <input type="text" id="item-amount" [(ngModel)]="item.amount">
                        <button (click)="onSubmit()">Add</button>
                </div>
            `,
    outputs:['itemAdded'],
})

export class ShoppingListNewItem{
    item= {name:'', amount:0};
    itemAdded= new EventEmitter<ListItem>()

    onSubmit(){
        this.itemAdded.emit(this.item);
    }
}