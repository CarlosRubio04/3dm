import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    items: any = [];
    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.getPortafolio().valueChanges().subscribe( items => {
            this.items = items;
            console.log(this.items);
        });
    }
}
