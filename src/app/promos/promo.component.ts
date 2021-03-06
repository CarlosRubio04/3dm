import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

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
    items: any = [];
    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.getPromos().valueChanges().subscribe( items => {
            this.items = items;
        });
    }
}
