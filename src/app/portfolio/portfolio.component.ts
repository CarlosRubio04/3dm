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
    modal: boolean = false;
    modalData: any = {};

    operadorActive: any = {};

    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.getPortafolio().valueChanges().subscribe( items => {
            this.items = items;
        });
    }

    openModal(item) {
        console.log(item);
        this.modalData = item;
        this.operadorActive = this.modalData.claro;
        this.modal = true;
    }

    changeOperador($event, op) {
        let  btns = document.getElementsByClassName('btn-op');
        btns[0].classList.remove('active');
        btns[1].classList.remove('active');
        btns[2].classList.remove('active');
        $event.classList.add('active');
        this.operadorActive = op;
    }
}
