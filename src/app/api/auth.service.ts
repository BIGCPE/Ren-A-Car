import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, observable } from 'rxjs'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:firebase.User;
  constructor(
    private firebaseDatabase:AngularFireDatabase,
    private firebaseAuth:AngularFireAuth
  ) { 
    firebaseAuth.authState.subscribe(user=>{
      this.user=user;
    })
  }

  testInsert(){
    return new Observable(observer=>{
      this.firebaseDatabase.database.ref('test')
      .push({name:"wongsakorn"})
      .then(data=>{
        observer.next(data);
        observer.complete();
      },err=>{
        observer.error(err);
        observer.complete();
      })
    })
  }
 
 

function() {
  
}


  signUp(obj){
    return new Observable(observer=>{
      if(obj.email!=null && obj.password!=null){
        this.firebaseAuth.auth.createUserWithEmailAndPassword(obj.email,obj.password)
        .then(result=>{
            this.firebaseDatabase.database.ref('users/'+result.user.uid)
            .set({uid:result.user.uid,email:obj.email})
            .then(()=>{
              observer.next();
              observer.complete();
            }).catch(err=>{
              observer.error(err);
              observer.complete();
            })
        })
        .catch(err=>{
          observer.error(err);
          observer.complete();
        })
      }else{
        observer.next();
        observer.complete();
      }
    })
  }

  signInWithEmailAndPassword(obj){
    return new Observable(observer=>{
      this.firebaseAuth.auth.signInWithEmailAndPassword(obj.email,obj.password).then(function(user){
        observer.next(user);
        observer.complete();
      }).catch(err=>{
        observer.error(err)
        observer.complete();
      })
    })
  }

  signInWithFacebook(){
    return new Observable(observer=>{
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      firebase.auth().languageCode = 'fr_FR';
      provider.setCustomParameters({
        'display': 'popup'
      });
      firebase.auth().signInWithPopup(provider).then(function(result) {
        observer.next(result)
        observer.complete()
      }).catch(function(error) {
        observer.next(error.code)
        observer.complete()
      });
    })
  }

  logout(){
    return new Observable(observable=>{
      this.firebaseAuth.auth.signOut().then(()=>{
        observable.next()
        observable.complete();
      }).catch((err)=>{
        observable.error(err)
        observable.complete();
      })
    })
    
  }

  get authenticated(): boolean {
    return this.user != null;
  }
}
