import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';
import { AuthService } from '../api/auth.service';
import { CarService } from '../api/car.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    private fireAut:AngularFireAuth,
    private rount:Router,
    private auth:AuthService,
    private car:CarService
  ){
    fireAut.authState.subscribe(user=>{
      if(user==null){
        rount.navigate(['login'])
      }
    })
  }

  logout(){
    this.auth.logout().subscribe(()=>{
      this.rount.navigate['/login'];
    })
  }

  search(){
    // this.car.agetSearch({}).then(data=>{
    //   data.subscribe(data=>{
    //     console.log(data)
    //   })
    // })
    this.car.getbooking({start:1545586100,end:1545586400}).subscribe(data=>{
      console.log(data)
    })

    // this.car.test({start:1545586100,end:1545586400})
  }
}
