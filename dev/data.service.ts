import {Injectable} from "@angular/core";

@Injectable()
export class DataService{
    private _data=['Summer', 'Winter', 'autumn', 'spring'];

    randomise(){
        let rndNum= Math.round(Math.random()* this._data.length);
        console.log(rndNum);
        return this._data[rndNum];
    }

    insert(value: string){
        this._data.push(value);
    }

}