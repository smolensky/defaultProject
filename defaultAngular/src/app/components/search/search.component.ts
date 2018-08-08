import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../../models/items-list';
import { ItemManagerService } from '../../services/item-manager.service';
import { FilterService } from '../../services/filter.service';

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

  constructor(private tiList: TodoItems, private filter: FilterService) {
    this.itemsList = tiList.todoItems;
  }

  ngOnInit() {
  }

}
