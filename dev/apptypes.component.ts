import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:`
        <h1>{{testCall()}}</h1>
        <!--string interpolation 1-->
        <input type="text" value="{{name}}" class="{{'red'}}">
        <!--property binding 2 []-->
        <!--<input type="text" [value]="name" [ngClass]="'red'"  [disabled]="1 === 1">-->
        <!--event binding 3 ()-->
        <!--<input type="text" (keyup)="onKeyUp(inputvalue.value)" #inputvalue>-->
        <!--two way binding 4-->
        <br><br>
        <input type="text" [(ngModel)]="name">
        <p>The name is: {{name}}</p>
    `
})
export class AppComponent {
    name= 'Nuclei';
    values= "";
    testCall(){
        return 1 === 1;
    }
    onKeyUp(val: string){
        this.values += val + '|';
    }

}