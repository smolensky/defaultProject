import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../../models/items-list';
import { FilterService } from '../../services/filter.service';
import { ComponentManagerService } from '../../services/component-manager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemsList;

  search(searchTerm) : void {
    let newList = this.fService.search(searchTerm);
    this.cmService.transferList(newList);
  }

  constructor(private tiList: TodoItems, private fService: FilterService, private cmService: ComponentManagerService) {
    this.itemsList = tiList.todoItems;
  }

  ngOnInit() {
  }

}
