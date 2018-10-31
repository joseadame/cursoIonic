import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthorPage } from '../author/author';
import { IBibliotecaPage } from '../i-biblioteca/i-biblioteca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateAuthorPage() {
    this.navCtrl.push(AuthorPage);
  }

  navigateBooksPage() {
    this.navCtrl.push(IBibliotecaPage);
  }

}
