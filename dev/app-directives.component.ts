import {Component} from '@angular/core';
import {AtrributeDirectiveComponent} from './attribute-directive.component';

@Component({
    selector:'my-app',
    template:`
              <my-custom-directive></my-custom-directive>
         `,
    directives:[AtrributeDirectiveComponent],
})
export class AppComponent {
    
}