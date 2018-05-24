import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-messagecorr',
    templateUrl: './messagecorr.component.html',
    // styleUrls: ['./fichier1.css', './fichier2.css']
    styles: [`
        textarea {
            width: 50%;
        }
    `],
})

export class MessagecorrComponent {
    @Input() text: string = '';
    @Input() limit: number = 0;
    @Output() response= new EventEmitter();
    

    sendMessage() {
        this.response.emit(this.text);
    }
}