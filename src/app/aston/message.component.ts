import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    template: `
        
        <div>
         <textarea maxLength="15" (keyup)="compte()" [(ngModel)]="message"></textarea>
        </div>

        <div> 
            {{counter}} caractères
        </div>

        <div [style.color]="message.length>10 ? 'red' : '' ">
            {{message}}
        </div>
     `
})

export class MessageComponent {
    counter: number;
    message: string = '';
   
    compte() {
        this.counter= this.message.length;
    }
}