import { Component } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  date1:string;
  date2:string;
  constructor(
    private auth:AuthService,
    private datePicker: DatePicker,
    private ru:Router
    ){

  }

  showdate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  insert(){
    this.auth.signInWithFacebook().subscribe(function(){
      alert("ok")
    })
  }

  search(){
    this.ru.navigate(['/listcar'])
  }
}
