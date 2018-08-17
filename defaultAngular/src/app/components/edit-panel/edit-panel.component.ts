import { Component, OnInit } from '@angular/core';
import { ItemManagerService } from '../../services/item-manager.service';
import { TodoItems, TodoItem, Category } from '../../dataLayer/data-manager.service';
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
    status: true
  };

  category: Category = {
    id: "",
    title: ""
  };

  saveItem(item: TodoItem, cat: Category) {
    if(item.title.length === 0){
      alert("You can't let title empty");
      return;
    }
    debugger;
    let updatedList = this.itemManager.saveItem(item, cat);

    // this.componentManager.transferList(updatedList);
    this.todoItem.id = "";
    this.todoItem.title = "";
    this.todoItem.status = true;
    this.category.title = "";
  }

  discard() : void {
    this.todoItem.id = "";
    this.todoItem.title = "";
    this.todoItem.status = true;
  }

  updateComponent(item: TodoItem) {
    if(item !== undefined){
      this.todoItem = {
        id: item.id,
        title: item.title,
        status: item.status
      };
    }
  }

  constructor(private itemManager: ItemManagerService, private componentManager: ComponentManagerService) {
  }

  ngOnInit() {
    this.componentManager.itemSourceMethodCalled$.subscribe(
      (item) => {
        this.updateComponent(item);
      }
    );
  }

}

