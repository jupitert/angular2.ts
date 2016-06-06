import {Component, EventEmitter} from '@angular/core';


@Component({
    selector:'confirm-input',
    template: `
        <h1>You submitted the following details, is it correct?</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span> and your age is 
                <span class="highlight">{{myself.age}}</span> years old. Please click on confirm
                    if you have made changes</p>
        <div>
                 <label for="name">Name</label>
                 <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()" >
            </div>
            <div>
                 <label for="age">Age</label>
                 <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()" >
            </div>

            <div>is Filled? {{isFilled ? 'Yes' :'No'}}</div>
            <div>is Valid? {{isValid? 'Yes' :'No'}}</div>
            <br>
            <button [disabled]="!isValid" (click)="onConfirm()">Confirm</button>
    `,
    inputs:['myself'],
    outputs:['confirmData'],

})
export class ConfirmComponent {
    myself= {name:'', age:''};
    isFilled= false;
    isValid= false;
    confirmData= new EventEmitter<{name: string, age: string}>();
    onConfirm() {
        this.confirmData.emit(this.myself);
    }
    onKeyup = function(){
        if(this.myself.name !='' && this.myself.age != ''){
            this.isFilled= true;
        }
        else{
            this.isFilled= false;
        }
        if(this.myself.name !='' && /^\d+$/.test(this.myself.age)){
            this.isValid= true;
        }
        else{
            this.isValid= false;
        }
    }
}