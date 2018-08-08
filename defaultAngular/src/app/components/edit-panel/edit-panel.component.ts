import { Component, OnInit } from '@angular/core';
import { ItemManagerService } from '../../services/item-manager.service';
import { TodoItems, TodoItem } from '../../models/items-list';
import { ComponentManagerService } from '../../services/component-manager.service';

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
    if(item.title.length === 0){
      alert("You can't let title empty");
      return;
    }
    let newItem = this.itemManager.saveItem(item);

    this.cmService.transferList(newItem);
    this.todoItem.id = "";
    this.todoItem.title = "";
    this.todoItem.comment = "";
    this.todoItem.status = true;
  }

  discard() : void {
    this.todoItem.id = "";
    this.todoItem.title = "";
    this.todoItem.comment = "";
    this.todoItem.status = true;
  }

  updateComponent(item: TodoItem) : void {
    if(item !== undefined){
      this.todoItem = {
        id: item.id,
        title: item.title,
        comment: item.comment,
        status: item.status
      };
    }
  }

  constructor(private itemManager: ItemManagerService, private cmService: ComponentManagerService) {
  }

  ngOnInit() {
    this.cmService.componentMethodCalled1$.subscribe(
      (item) => {
        this.updateComponent(item);
      }
    );
  }

}

