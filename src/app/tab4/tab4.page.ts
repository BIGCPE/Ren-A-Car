import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
declare var google:any;
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss']
})
export class Tab4Page implements OnInit {
  
  @ViewChild('map') mapRef:ElementRef;
  map:any;
  isLogined:boolean = false;
  
  constructor(private authFire:AngularFireAuth) { 
    authFire.authState.subscribe(user=>{
      console.log(user)
      if(user!=null){
        this.isLogined=true;
      }else{
        this.isLogined=false;
      }
    })
  }

  ngOnInit() {
    this.displayMap();
  }
  displayMap(){
    const location = new google.maps.LatLng(16.7480944,100.1974895);
    const options ={
      center:location,
      zoom: 15,
      mapTypeId: 'roadmap',
      disableDefaultUI: true,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  }
}
