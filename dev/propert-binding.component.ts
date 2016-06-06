import {Component, EventEmitter} from '@angular/core';
import {Input} from '@angular/core';
@Component({
    selector:'data-bind',
    template:`
        <h2>This is the child Component</h2>
        <p>Hey {{name}}!, your age is {{age}}.</p>
        <p>my Hobbies are</p>
        <input type="text" (keyup)="onHobbiesChange(hobbies.value)" #hobbies>
        <input type="text" (keyup)="onQualifyChange(qualify.value)"  #qualify>
    `,
    inputs: ['name: myName'],
    outputs:['hobbiesChanged','qualifyChanges'],
})


export class PropertyBinding {
    name= '';
    @Input('myAge') age= '';

    hobbiesChanged= new EventEmitter<string>();
    onHobbiesChange= function(hobbies: string){
        this.hobbiesChanged.emit(hobbies)
    };
    qualifyChanges= new EventEmitter<string>();
    onQualifyChange= function(qualify: string){
        this.qualifyChanges.emit(qualify);
    }

}