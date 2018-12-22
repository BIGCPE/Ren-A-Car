import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private navCont:NavController
  ){
    
  }

  detail(){
    this.navCont.navigateBack(['/detail'])
  }
}
