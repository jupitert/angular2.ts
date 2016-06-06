import {Component} from '@angular/core';
import {MyShoppingComponent} from "./shoppinglist/myshoppinglist.component";
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector:'my-app',
    template:`
              <component-1></component-1>
              <br><br>
              <component-2></component-2>
             
         `,
    directives:[Component1Component, Component2Component],
})
export class AppComponent {
    
}