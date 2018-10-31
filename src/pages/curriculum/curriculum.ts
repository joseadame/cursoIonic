import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurriculumServiceProvider } from '../../providers/curriculum-service/curriculum-service';

/**
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curriculum',
  templateUrl: 'curriculum.html',
})
export class CurriculumPage {
  jobs: { description: string; period: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private curriculumService: CurriculumServiceProvider) {
    this.jobs = this.curriculumService.getJobs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurriculumPage');
  }

}
