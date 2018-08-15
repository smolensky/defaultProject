import { Component, OnInit } from '@angular/core';
import { TodoItems, TodoItem, DataManagerService } from '../../dataLayer/data-manager.service';
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
    this.componentManager.transferItem(item);
  }
  
  clone(item: TodoItem) : void {
    event.stopPropagation();
    this.itemManager.saveItem(item, true);
  }
  
  delete(item: TodoItem) : void {
    event.stopPropagation();
    this.itemManager.deleteItem(item);
  }

  toggleStatus(item: TodoItem) : void {
    item.status = !item.status;
    this.dataManager.editItem(item)
    .subscribe(val => this.componentManager.transferList(val));
  }

  updateItemsList(items: TodoItems) : void {
    this.itemsList = items;
  }

  constructor(private itemManager: ItemManagerService, 
      private componentManager: ComponentManagerService, 
      private dataManager: DataManagerService) {
  }

  ngOnInit() {
    this.componentManager.listSourceMethodCalled$.subscribe(
      (items) => {
        this.updateItemsList(items);
      }
    )
  }

}
