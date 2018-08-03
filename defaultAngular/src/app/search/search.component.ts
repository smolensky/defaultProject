import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../items-list';
import { ItemManagerService } from '../item-manager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemsList;

  search(searchTerm) : void {
    this.filter.search(searchTerm);
  }

  constructor(private filter: ItemManagerService, private tiList: TodoItems) {
    this.itemsList = tiList.todoItems;
  }

  ngOnInit() {
  }

}
