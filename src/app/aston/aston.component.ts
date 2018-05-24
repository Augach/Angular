import { Component } from '@angular/core';

// data-binding

/**
 * {{ }} String Interpolation
 * [] Property binding [propriété.sous-propriété]= "' '"  
 * () Event Binding pour ex click keyup etc
 * [()] Two Way Data Binding
 */

@Component({
    selector: 'app-aston',
    template: `
        <h1 [style.color]= "name === 'toto' ? 'red' : 'blue'" >
            Aston Component {{name}}
        </h1>
        <input type="test" [(ngModel)]="name"/>
        <button class="btn btn-sm btn-default" [disabled]="name === '' ? true : false">Hello</button>

        <button class="btn btn-sm btn-default" (click)="counter = counter + 1">+</button>
        <button class="btn btn-sm btn-default"(click)="counter = counter - 1">-</button>
        <button class="btn btn-sm btn-default"(click)="decrease()">-</button> {{ counter}}
        
        <app-messagecorr></app-messagecorr>
     `
})

export class AstonComponent {
    counter: number = 0;
    name: string = '';
   
    decrease() {
        this.counter --;
    }
}
