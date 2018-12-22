import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, observable } from 'rxjs'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private fireDB:AngularFireDatabase
    ) {

   }



   isIn(time1,time2):boolean{
    var keys = [];
    for(var k in time2) keys.push(k);
     keys.forEach(k=>{
       console.log(time2[k])
     })
      if((time1.start<time2.end && time1.start>time2.start)|| (time1.end<time2.end && time1.end>time2.start)){
        console.log("ino")
        return true;
      }else{
        return false;
      }
   }

   async getcar(time,data){
    const booking = [];
    const read = await data.forEach(car=>{
      var keys = [];
      for(var k in car.val()) keys.push(k);
      keys.forEach(k=>{
        var time1=time
        var time2=car.val()[k];
        if((time1.start<time2.end && time1.start>time2.start)|| (time1.end<time2.end && time1.end>time2.start)){
          booking.push(car.key)
        }
      })
    })
    const arr = []
    await this.fireDB.database.ref('cars').once('value',c=>{
      c.forEach(car=>{
        console.log(car.val(),car.key)
        console.log(booking.indexOf(car.key))
        if(booking.indexOf(car.key)<0){
          arr.push(car.val())
        }
      })
    })
    return arr;
   }

   getbooking(time){
    return new Observable(observer=>{
      this.fireDB.database.ref('booking').once('value',data=>{
        this.getcar(time,data).then(listcar=>{
          observer.next(listcar);
          observer.complete();
        }).catch(err=>{
          observer.error(err);
          observer.complete();
        })
      })
    })
   }

   test(time){
     this.getbooking(time).subscribe(datanot=>{
      this.fireDB.database.ref('cars').once('value',data=>{
        data.forEach(car=>{
          console.log(car.val(),car.key)
          console.log(datanot)
        })
      })
     })
     
   }
}
