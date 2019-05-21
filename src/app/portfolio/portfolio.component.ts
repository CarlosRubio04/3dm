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
    modalData: any = {
        action: "www.twitter.com",
        description: "Hola esto es otra prueba",
        id: 1539354464599,
        title: "Prueba 3",
        claro: {
            valor: "El costo del servicio es de $718 IVA incluido diario.",
            activar: "Enviando un mensaje de texto al código 37787 con la palabra SOLICITO HAPPY.",
            cancelar: "Ingresando aquí podrá consultar las suscripciones activas y cancelarlas, o enviando un mensaje de texto al código 37787 con la palabra HAPPY SALIR."
        },
        tigo: {
            valor: "2El costo del servicio es de $718 IVA incluido diario.",
            activar: "Enviando un mensaje de texto al código 37787 con la palabra SOLICITO HAPPY.",
            cancelar: "Ingresando aquí podrá consultar las suscripciones activas y cancelarlas, o enviando un mensaje de texto al código 37787 con la palabra HAPPY SALIR."
        },
        movistar: {
            valor: "3El costo del servicio es de $718 IVA incluido diario.",
            activar: "Enviando un mensaje de texto al código 37787 con la palabra SOLICITO HAPPY.",
            cancelar: "Ingresando aquí podrá consultar las suscripciones activas y cancelarlas, o enviando un mensaje de texto al código 37787 con la palabra HAPPY SALIR."
        }
    };

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
