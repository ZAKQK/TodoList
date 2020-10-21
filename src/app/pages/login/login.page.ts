import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
const firebase = require('firebase/app');
require('firebase/auth');

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;
  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async loginRegister() {
    console.log(this.email, '==>', this.password);

    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    firebase.auth().signInWithEmailAndPassword
      (this.email, this.password)
      .then(results => {
        // Succesful
        console.log(results);
        loading.dismiss();
        this.router.navigateByUrl('');
      })
      .catch((error) => {
        // Unsuccesful
        loading.dismiss();
        console.log(error.message);
      });
  }
}
