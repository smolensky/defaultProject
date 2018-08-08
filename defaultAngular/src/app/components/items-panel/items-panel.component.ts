import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TodoItems, TodoItem } from '../../models/items-list';
import { ItemManagerService } from '../../services/item-manager.service';
import { ComponentManagerService } from '../../services/component-manager.service';

@Component({
  selector: 'app-items-panel',
  templateUrl: './items-panel.component.html',
  styleUrls: ['./items-panel.component.css']
})
export class ItemsPanelComponent implements OnInit {
  itemsList;

  edit(item: TodoItem) : void {
    event.stopPropagation();
    this.cmService.transferItem(item);
    // this.imService.editItem(item);
  }
  
  clone(item: TodoItem) : void {
    event.stopPropagation();
    this.imService.saveItem(item, true);
  }
  
  delete(item: TodoItem) : void {
    event.stopPropagation();
    this.imService.deleteItem(item);
  }

  toggleStatus(item: TodoItem) : void {
    item.status = !item.status;
  }

  updateItemsList(items: TodoItems) : void {
    this.itemsList = items;
  }

  constructor(private tiList: TodoItems, private imService: ItemManagerService, private cmService: ComponentManagerService) {
    this.itemsList = tiList.todoItems;
  }

  ngOnInit() {
    this.cmService.componentMethodCalled2$.subscribe(
      (items) => {
        this.updateItemsList(items);
      }
    )
  }

}
