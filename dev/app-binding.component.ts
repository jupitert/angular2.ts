import {Component} from '@angular/core';
import {InputComponent} from './binding/input.component';
import {ConfirmComponent} from './binding/confirm.component'

@Component({
    selector:'my-app',
    template:`
        <div class="container">
                <input-compo (inputData)="onSubmited($event)" [myself]="confirmmyself"></input-compo>
        </div>
        <div class="container">
            <confirm-input (confirmData)="onConfirm($event)" [myself]="myself"></confirm-input>
        </div>
    `,
    directives:[InputComponent, ConfirmComponent]



})
export class AppComponent {
    myself= {name: '', age: ''};
    confirmmyself= {name: '', age: ''};
    onSubmited= function(myself: {name: string, age:string}){
        this.myself= {name: myself.name, age: myself.age};
        console.log(myself);
    };
    onConfirm= function(myself: {name: string, age:string}){
        this.confirmmyself= {name: myself.name, age: myself.age};
    }
}