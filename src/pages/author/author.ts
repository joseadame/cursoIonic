import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurriculumPage } from '../curriculum/curriculum';

/**
 * Generated class for the AuthorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-author',
  templateUrl: 'author.html',
})
export class AuthorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorPage');
  }

  navigateToCurriculum() {
    this.navCtrl.push(CurriculumPage);
  }
}
