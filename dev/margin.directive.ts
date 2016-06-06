import {Directive, ElementRef, Renderer} from '@angular/core';
import {OnInit} from '@angular/core';

@Directive({
    selector: '[myMargin]',
})


export class MarginDirective implements OnInit{
    private _defaultmargin= '10px';

    constructor(private _eleRef: ElementRef, private _renderer: Renderer){

    }

    ngOnInit():any{
        this._renderer.setElementStyle(this._eleRef.nativeElement, 'margin', this._defaultmargin);
    }

}