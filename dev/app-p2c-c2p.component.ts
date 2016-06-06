import {Component} from '@angular/core';
import {PropertyBinding} from './propert-binding.component'

@Component({
    selector:'my-app',
    template:`
        <section class="parent">
            <h2>This is the parent component</h2>
            <p>Please enter your name below</p>
            Name: <input type="text" [(ngModel)]="name">
            Age: <input type="text" [(ngModel)]="age">
            <br><br>
     
            <section class="child">
                <data-bind [myName]="name" [myAge]="age" (hobbiesChanged)="hobbies = $event" (qualifyChanges)="qualification = $event"></data-bind>
              
            </section>
             <h2>My Hobbies are: {{hobbies}} {{qualification}}</h2>
        </section>
        
    `,
    directives:[PropertyBinding]
})
export class AppComponent {
    // name= 'Nuclei';
    // values= "";
    // testCall(){
    //     return 1 === 1;
    // }
    // onKeyUp(val: string){
    //     this.values += val + '|';
    // }
    name = '';

}