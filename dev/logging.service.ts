import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService{
    private _lastmessage= '';

    log(name:string){
        console.log('Current Message: '+name+ ' Previous Message: '+ this._lastmessage);
        this._lastmessage= name;
    }

}