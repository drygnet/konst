import { Component } from '@angular/core';
import { ArtService } from './art.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { race } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private art: ArtService) { }
  items = [];
  popup = null;

  ngOnInit() {
    this.items = this.art.getItems();
  }

  star(item, rating) {
    this.art.star(item, rating);
  }

  showPopup(item) {
    this.popup = item;
    console.log(this.popup);
  }

  checkItem(item) {
    console.log('checking');
    this.art.checkItem(item);
  }
}
