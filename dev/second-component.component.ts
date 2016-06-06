import {Component} from '@angular/core';
import {TestComponent} from './test-component'
import {OnInit} from '@angular/core';
@Component({
    selector:'second-component',
    template:`
        <h4>This <span [style.color]="agreement.value==='iagree'? 'red': ''" >Nuclues</span> offers more components to our ecosystem</h4>
        <p>you need to enter the value to interact with <span [class.is-awesome]="agreement.value==='iagree'">{{name}}</span>....</p>
        <input type="text" #agreement (keyup)="0">
        <button [disabled]="agreement.value!=='iagree'">I Agree</button>
        <hr>
        <test-tag></test-tag>
    `,
    styleUrls: ['./src/css/main.css'],
    directives:[TestComponent]
})


export class secondComponent implements OnInit {
    name = String;

    ngOnInit():any{
        //this.name= "Shankar";
    }
}