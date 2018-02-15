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
  view = 'grid';

  ngOnInit() {
    this.items = this.art.getItems();
  }

  ordered() {
    return this.items.sort(function (a, b) {
      return (a.id > b.id) ? 1 : -1;
    });
  }

  sorted() {
    this.items.map(item => {
      if (item.stars == null) {
        item.stars = 0;
      }
    });
    return this.items.sort(function (a, b) {
      return b.stars - a.stars || b.value - a.value;
    });
  }

  star(item, rating) {
    this.art.star(item, rating);
  }

  showPopup(item) {
    this.popup = item;
  }

  checkItem(item) {
    this.art.checkItem(item);
  }
}
