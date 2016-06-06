import {Component} from '@angular/core';
import {UnlessDirective} from './unless.directive';

@Component({
    selector: 'my-structural-directives',
    template:`
         <!--for 1. ng if-->
        <section class="directive">
            <h2>*ngIf</h2>
            <div>
                please enter a value which is greater than 10.
                <input type="text" #inputValue (keyup)="0" >
            </div>
            <div *ngIf="inputValue.value >10"><h1>Number is greater than 10</h1></div>
        </section>
        
        
        <!--for 2. ng for-->
        <section class="directive">
            <h2>*ngFor</h2>
            <ul>
            <li *ngFor="let item of list, let i = index">{{item}} {{i}}</li>
            </ul>
        </section>
        
        <!--for 3. ng switch-->
        <section>
            <h2>[ngSwitch]</h2>
            <div>
                Enter Red, blue or green? <br>
                <input type="text" #color (keyup)="0">
            </div>
            <div [ngSwitch]="color.value">
                <template [ngSwitchWhen]="'blue'"><span style="color:blue">Color is Blue</span></template>
                <template [ngSwitchWhen]="'green'"><span style="color:green">Color is Green</span></template>
                <template [ngSwitchWhen]="'red'"><span style="color:red">Color is Red</span></template>
                <template ngSwitchDefault><span>Dont know the color</span></template>
            </div>
        </section>
        
        
        <!--4. my custom directive-->
        <section class="directive">
            <h2>Custom Directive</h2>
            
            <div>
                Enter true or False? <br>
                <input type="text" #custom (keyup)="0">
            </div>
            
            <div *myUnless="custom.value != 'false'">
                Only shown if false entered
            </div>
        </section>
        
    `,
    directives: [UnlessDirective],

})

export class StructuralDirectives {
    list=['Apple', 'Banana', 'Orange'];
}