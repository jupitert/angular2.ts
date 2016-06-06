import {Component} from '@angular/core';
import {EventEmitter} from "@angular/compiler/src/facade/async";
import {ListItem} from "../list-item";

@Component({
    selector:'shopping-list-edit-item',
    template:`
                <div class="input">
                        <label for="item-name">Name</label>
                            <input type="text" id="item-name" [(ngModel)]="item.name">
                        <label for="item-amount">Days</label>
                            <input type="text" id="item-amount" [(ngModel)]="item.amount">
                        <button class="danger" (click)="onDelete()">Delete</button>
                </div>
    `,
    inputs:['item'],
    outputs:['removed'],
})

export class ShoppingListEditItem {
    item= {name:'', amount:0};
    removed= new EventEmitter<ListItem>();

    onDelete(){
        this.removed.emit(this.item);
    }

}