import {Component} from '@angular/core';
import {LoggingService} from "./logging.service";
import {CalculatorService} from "./calculator.service";


@Component({
    selector:'component-1',
    template:` 
             <div>
                <input type="text" #message>
                <button (click)="onSend(message.value)">Send</button>
            </div>
            <div>
                <h2>Calculator</h2>
                <input type="text" #num1>
                <input type="text" #num2>
                <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
                <button (click)="onAddition(num1.value, num2.value)">Add</button>
                <div>Result: {{result}}</div>
            </div>
            
    `,
})


export class Component1Component{
    result: string;
    constructor(private _logref: LoggingService, private _calculatorService: CalculatorService){}

    onSend(name: string){
        this._logref.log(name);
    }
    onMultiply(num1: string, num2: string ){
           this.result= this._calculatorService.multiply(+num1, +num2);

    }
    onAddition(num1: string, num2: string ){
        this.result= this._calculatorService.add(+num1, +num2);
    }
}