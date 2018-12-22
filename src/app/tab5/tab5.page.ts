import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  email:string;
  password:string;

  constructor(
    private auth:AuthService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.auth.signInWithEmailAndPassword({email:this.email,password:this.password}).subscribe(data=>{
      this.route.navigate(['/tabs/tab4']);
    },err=>{
      console.log(err)
    })
  }
}
