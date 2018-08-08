import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../../models/items-list';
import { FilterService } from '../../services/filter.service';
import { ComponentManagerService } from '../../services/component-manager.service';
import { ItemManagerService } from '../../services/item-manager.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
  itemsList;

  UseFilter(term: boolean) : void {
    let newList = this.fService.filterByStatus(term);
    this.cmService.transferList(newList);
  }

  DeleteAll() : void {
    let newList;
    if(confirm('Sure to delete all?')){
      this.cmService.transferList(newList);
      this.imService.deleteAll();
    }
  }
  
  constructor(private tiList: TodoItems, private fService: FilterService, private cmService: ComponentManagerService, private imService: ItemManagerService) { }

  ngOnInit() {
  }

}
