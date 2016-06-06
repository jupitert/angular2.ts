import {Component} from '@angular/core';
import {HighlightDirective} from './highlight.directive';
import {StructuralDirectives} from './structural-directive.component'
import {MarginDirective} from "./margin.directive";

@Component({
        selector: 'my-custom-directive',
        template: `
           <div myHighlight [changeColor]="'blue'"> Highlight Me</div>
           <div myMargin >Margin Me</div>
            <my-structural-directives></my-structural-directives>
        `,
        directives:[HighlightDirective, StructuralDirectives, MarginDirective]
})

export class AtrributeDirectiveComponent{

}