import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
require('firebase/firestore');

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  toDoObj = {
    name: '',
    time: '',
    priority: '',
  };
  constructor(private navCtlr: NavController,
    private loadingController: LoadingController,
    private modalCtrlr: ModalController) { }

  ngOnInit() {
  }

  async addTodo() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();


    firebase.firestore().collection('toDo')
      .add(this.toDoObj)
      .then((res) => {
        console.log("Document successfully written!");
        this.modalCtrlr.dismiss();
        loading.dismiss();
      })
      .catch((error) => {
        loading.dismiss();
        console.error("Error writing document: ", error);
      });
  }
}
