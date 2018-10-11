import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})

export class PromoComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
}