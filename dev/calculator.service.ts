import {Injectable} from "@angular/core";
@Injectable()
export class CalculatorService{
    add(num1 : number, num2: number){
        return num1+num2;
    }

    multiply(num1 : number, num2: number){
        return num1*num2;
    }

    divide(num1: string, num2: string){
        return num1/num2;
    }
}