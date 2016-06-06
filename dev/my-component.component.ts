import {Component} from '@angular/core';
@Component({
    selector:'my-component',
    template:`
        <h1>Nuclues IO</h1>
        <p>Hey The CEO name is <span [style.color]= "awesomeness.value === 'yes' ?'red' : ''">{{name}}</span>. this is my first component. is it awesome?
        <br><br>
        <span [class.is-awesome]="awesomeness.value==='yes'">This is awesome...</span>
        </p>
        <input type="text" #awesomeness (keyup)="0">
        <br><br>
        <button [disabled]="awesomeness.value!=='yes'">only enable if its yes</button>
        
    `,
    styleUrls:['./src/css/main.css']
})

export class MyComponentComponent{
    name='Shankar'
}