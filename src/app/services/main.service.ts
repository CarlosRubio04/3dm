import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class MainService {

  constructor(private afDB: AngularFireDatabase) { }

  public getPortafolio() {
    return this.afDB.list('data/portfolio/');
  }
  public getPortafolioItem(id) {
    return this.afDB.object('data/portfolio/' + id);
  }
  public getPromos() {
    return this.afDB.list('data/promos/');
  }

  public getPromoItem(id) {
    return this.afDB.object('data/promos/' + id);
  }
}
