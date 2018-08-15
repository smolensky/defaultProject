import { Component, OnInit } from '@angular/core';
import { TodoItems,TodoItem } from '../../dataLayer/data-manager.service';
import { FilterService } from '../../services/filter.service';
import { ComponentManagerService } from '../../services/component-manager.service';
import { ItemManagerService } from '../../services/item-manager.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
  UseFilter(term: boolean) : void {
    let newList = this.filter.filterByStatus(term);
    this.componentManager.transferList(newList);
  }

  DeleteAll() : void {
    let newList;
    if(confirm('Sure to delete all?')){
      this.itemManager.deleteAll();
    }
  }
  
  constructor(private filter: FilterService, private componentManager: ComponentManagerService, private itemManager: ItemManagerService) { }

  ngOnInit() {
  }

}
