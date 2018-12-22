import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  constructor(
    private navCon:NavController,
    private auth:AuthService,
    private router:Router,
    public loadingController: LoadingController,
    public toastController: ToastController,) { 

  }

  ngOnInit() {
  }
  register(){
    this.router.navigate(['register'])
  }

  async loing(){
    const loading = await this.loadingController.create({
      message: 'กำลังเข้าสู่ระบบ'
    });
    loading.present();
    this.auth.signInWithEmailAndPassword({email:this.email,password:this.password}).subscribe(user=>{
      if(user){
        loading.dismiss();
        this.navCon.navigateRoot('/');
      }else{
        loading.dismiss();
        this.presentToast("can not register")
      }
    },err=>{
      loading.dismiss();
      this.presentToast(err.code)
    })
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
