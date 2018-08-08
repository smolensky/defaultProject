import { Component, OnInit } from '@angular/core';
import { TodoItems, TodoItem } from '../../models/items-list';
import { ItemManagerService } from '../../services/item-manager.service';

@Component({
  selector: 'app-items-panel',
  templateUrl: './items-panel.component.html',
  styleUrls: ['./items-panel.component.css']
})
export class ItemsPanelComponent implements OnInit {
  itemsList;

  edit(item: TodoItem) : void {
    event.stopPropagation();
    this.imService.editItem(item);
    
  }
  
  clone(item: TodoItem) : void {
    event.stopPropagation();
    this.imService.saveItem(item);
  }
  
  delete(item: TodoItem) : void {
    event.stopPropagation();
    this.imService.deleteItem(item);
  }

  toggleStatus(item: TodoItem) : void {
    if(item.status == true){
      item.status = false;
    } else {
      item.status = true;
    }
  }

  updateList(items: TodoItems) : void {

  }

  constructor(private tiList: TodoItems, private imService: ItemManagerService) {
    this.itemsList = tiList.todoItems;
  }

  ngOnInit() {
  }

}
