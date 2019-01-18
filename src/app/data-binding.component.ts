import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-db',
    template: `
<img [src]="imageUrl" /> qui équivaut à <img src="{{imageUrl}}" /> <br/>
<button [disabled]="currentValue" (click)="onClick()">CLICK</button>
<button disabled ={{currentValue}} (click)="onClick()">CLICK</button>
    `
})
export class DataBindingComponent implements OnInit {
    public imageUrl = '../assets/angular.png';
    public currentValue = true;
    constructor() { }

    ngOnInit(): void {
        this.currentValue = false;
     }

    onClick(): void {
        this.currentValue = true;
    }
}
