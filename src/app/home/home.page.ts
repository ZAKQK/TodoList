import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTodoPage } from '../pages/add-todo/add-todo.page';
import * as firebase from 'firebase/app';

require('firebase/firestore');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  toDoList = [];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    firebase.firestore().collection('toDo').onSnapshot(res => {
      res.forEach(element => {
        this.toDoList.push(element.data());
      });
      console.log('Successful!!!');
    });
  }
  async presentAddTodoModal() {
    const modal = await this.modalController.create({
      component: AddTodoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
