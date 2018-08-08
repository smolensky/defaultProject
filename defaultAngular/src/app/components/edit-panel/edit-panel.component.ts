import { Component, OnInit } from '@angular/core';
import { ItemManagerService } from '../../services/item-manager.service';
import { TodoItems, TodoItem } from '../../models/items-list';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {
  todoItem: TodoItem = {
    id: "",
    title: "",
    comment: "",
    status: true
  };
 
  saveItem(item: TodoItem) : void {
    this.itemManager.saveItem(item);
    this.todoItem.title = "";
    this.todoItem.comment = "";
  }

  updateComponent(item: TodoItem) : void {
    this.todoItem = {
      id: item.id,
      title: item.title,
      comment: item.comment,
      status: item.status
    };
  }

  constructor(private itemManager: ItemManagerService) {
  }

  ngOnInit() {
  }

}

