import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector :'[myUnless]',
    inputs:['myUnless'],
})

export class UnlessDirective{

    // to catch template reference- that's the content inbetween the element

    constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef){

    }

    //now setting the input we got from the input and executing the function..
    set myUnless(condition : boolean){
        if(!condition){
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }else{
            this._viewContainerRef.clear();
        }
    }

}