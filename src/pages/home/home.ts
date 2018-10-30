import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthorPage } from '../author/author';

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

}
