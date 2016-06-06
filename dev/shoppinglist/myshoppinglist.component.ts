import {Component} from '@angular/core';
import {ShoppingListNewItem} from "./shopping-list-new-item.component";
import {ShoppingListEditItem} from "./shopping-list-edit-item.component";
import {ListItem} from "../list-item";

@Component({
    selector:'my-shopping-list',
    template:`
                <section>
                        <h2>New Projetcs</h2>
                        <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
                </section>
                <section>
                    <h2>My List</h2>
                    <ul>
                        <li *ngFor="let item of myList" (click)="onSelect(item)">
                            {{item.name | uppercase}} ({{item.amount}})
                        </li>
                    </ul>
                </section>
                <section *ngIf="selectedItem != null">
                        <h2>Edit Project test</h2>
                        <shopping-list-edit-item [item]="selectedItem" (removed)="update($event)"></shopping-list-edit-item>
                </section>
            
            `,

            directives:[ShoppingListNewItem, ShoppingListEditItem]
})

export class MyShoppingComponent {

    myList = new Array<ListItem>();
    selectedItem: ListItem;


    onItemAdded(item: ListItem){
        this.myList.push({name: item.name, amount:item.amount})
    };

    onSelect(item: ListItem){
        this.selectedItem= item;
        console.log(this.selectedItem);
    }

    update(item: ListItem){
        this.myList.splice(this.myList.indexOf(item),1);
        this.selectedItem= null;
    }

}