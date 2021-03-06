import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../../dataLayer/data-manager.service';
import { FilterService } from '../../services/filter.service';
import { ComponentManagerService } from '../../services/component-manager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search(searchTerm) : void {
    let newList = this.filter.search(searchTerm);
    this.componentManager.transferList(newList);
  }

  constructor(private filter: FilterService, 
    private componentManager: ComponentManagerService) {
  }

  ngOnInit() {
  }

}
