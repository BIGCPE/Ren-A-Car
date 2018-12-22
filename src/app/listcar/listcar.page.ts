import { Component, OnInit } from '@angular/core';
import { CarService } from '../api/car.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listcar',
  templateUrl: './listcar.page.html',
  styleUrls: ['./listcar.page.scss'],
})
export class ListcarPage implements OnInit {

  lists:any=[{brand:"",image:"",position:"",price:""}];
  constructor(private car:CarService,private navCont:NavController){
    this.car.getbooking({start:1545586100,end:1545586400}).subscribe(data=>{
      this.lists=data
      console.log(this.lists)
    })
  }

  ngOnInit() {
  }

  detail(){
    this.navCont.navigateBack(['/detail'])
  }

}
