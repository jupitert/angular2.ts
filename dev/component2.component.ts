import {Component} from '@angular/core';
import {LoggingService} from "./logging.service";
import {CalculatorService} from "./calculator.service";
import {DataService} from "./data.service";


@Component({
    selector:'component-2',
    template:`
            <input type="text" #message>
            <button (click)="onSend(message.value)">Send</button>
            <h2>Calculator</h2>
                <input type="text" #num1>
                <input type="text" #num2>
                <button (click)="onDivision(num1.value, num2.value)">Divide</button>
                <div>Result: {{result}}</div>
                
                <div>
                    <h2>Get Data from the Service</h2>
                    <button (click)="getData()">Get Data</button>
                    <p>Weather is {{weather}}</p>
                    <input type="text" #insert>
                    <button (click)="insertData(insert.value)">Insert</button>
                </div>

    `,
    providers:[DataService],

})


export class Component2Component{
    result='';
    weather='';
    constructor(private _logref: LoggingService, private _calculatorService: CalculatorService, private _dataService : DataService){}

    onSend(name: string){
        this._logref.log(name);
    }
    onDivision(num1: string, num2: string){
        this.result= this._calculatorService.divide(num1, num2);
    }
    insertData(data: string){
        this._dataService.insert(data);
        data='';

    }
    getData(){
        this.weather= this._dataService.randomise();
    }


}