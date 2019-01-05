import {Component, OnDestroy, OnInit} from '@angular/core';
import PostItem from "./post-list-item-component/PostItem";
import {interval, Observable, Subscription} from "rxjs";
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {;
  secondes: number;
  counterSubscription : Subscription;

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyBGDhOUtIqi9PCNz1Z91b7jbtC8oWiHG8Q",
      authDomain: "oc-tuto-posts.firebaseapp.com",
      databaseURL: "https://oc-tuto-posts.firebaseio.com",
      projectId: "oc-tuto-posts",
      storageBucket: "oc-tuto-posts.appspot.com",
      messagingSenderId: "580723688165"
    };
    firebase.initializeApp(config);

    const counter = interval(1000);
    this.counterSubscription = counter.subscribe((value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Erreur intervale');
      },
      () => {
        console.log('Everything is OK !');
      });
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
