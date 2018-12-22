import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email:string;
  password:string;

  constructor(
    private navCon:NavController,
    public loadingController: LoadingController,
    private auth:AuthService,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  back(){
    this.navCon.goBack();
  }

  async register(){
    const loading = await this.loadingController.create({
      message: 'กำลังลงทะเบียน'
    });
    loading.present();
    this.auth.signUp({email:this.email,password:this.password}).subscribe((user)=>{
      if(user){
        loading.dismiss();
        this.navCon.goBack()
      }else{
        this.presentToast("can not register")
      }
      
    },err=>{
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
