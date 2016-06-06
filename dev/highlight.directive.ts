import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[myHighlight]',
    inputs:['changeColor'],
    host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighlightDirective{
    private _defaultColor= "green";
    private _defaultPadding= "10px";
    private changeColor : string;

    constructor (private _elRef: ElementRef, private _renderer:  Renderer){

    }

    // ngOnInit():any{
    //     //this._elRef.nativeElement.style.background = this._defaultColor;
    //     this._renderer.setElementStyle(this._elRef.nativeElement, 'background', this. myBgColor || this._defaultColor);
    //     this._renderer.setElementStyle(this._elRef.nativeElement,'padding', this._defaultPadding);
    // }

    onMouseEnter(){
        this.myHighlights(this.changeColor || this._defaultColor);
        //this._renderer.setElementStyle(this._elRef.nativeElement, 'background', );
    }

    onMouseLeave(){
        this.myHighlights(null);
       // this._renderer.setElementStyle(this._elRef.nativeElement, 'background', null);
    }

    private myHighlights(color){
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background', color);
    }

}