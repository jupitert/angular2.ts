import {Component, EventEmitter} from '@angular/core';

@Component({
        selector: 'input-compo',
        template:`
            <h1>Your details please,</h1>
            <div>
                 <label for="name">Name</label>
                 <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
            </div>
            <div>
                 <label for="age">Age</label>
                 <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
            </div>

            <div>is Filled? {{isFilled ? 'Yes': 'No'}}</div>
            <div>is Valid? {{isValid ? 'Yes': 'No'}}</div>
         
            <button [disabled]="!isValid" (click)="onSubmit()">Save</button>
        `,
        inputs:['myself'],
        outputs: ['inputData'],


})


export class InputComponent {
    myself= {name:'', age:''};
    isFilled= false;
    isValid= false;
    inputData= new EventEmitter<{name: string, age: string}>();
    onSubmit = function(){
        this.inputData.emit(this.myself);
    };

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