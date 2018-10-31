import { Injectable } from '@angular/core';

/*
  Generated class for the CurriculumServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurriculumServiceProvider {

  jobs = [
    {
      description: 'Programador Senior en ViewNext',
      period: '2006-2014'
    },
    {
      description: 'Ingeniero de software e Investigador en CETA-CIEMAT',
      period: '2014-2016'
    },
    {
      description: 'Analista en Gpex',
      period: '2017-Actualidad'
    }
  ]
  constructor() {
    console.log('Hello CurriculumServiceProvider Provider');
  }

  public getJobs() {
    return this.jobs;
  }

}
