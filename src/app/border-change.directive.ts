import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[border-change]',
})
export class BorderChangeDirective { 

    constructor(private el: ElementRef) {
        this.setTheBorderColor('#f5f5f5'); // donne une couleur initial aux bordures
        }

        @HostListener('mouseenter')
        onMouseenter() {
        this.setTheBorderColor('#009688');
        } // permet de lier une méthode de notre directive à un événement donné
        
        @HostListener('mouseleave')
        onMouseleave() {
        this.setTheBorderColor('#f5f5f5'); // permet de lier une méthode de notre directive à un événement donné
        // change la couleur des bordures au survole de l'élément par le curseur
        // change la couleur des bordures au retrait du curseur.
        }


        private setTheBorderColor(color: string) {
        this.el.nativeElement.style.border = 'solid 5px '+color;
        }
}