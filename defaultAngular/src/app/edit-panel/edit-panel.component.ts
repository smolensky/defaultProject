import { Component, OnInit } from '@angular/core';
import { ItemManagerService } from '../item-manager.service';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {
  todoItem : TodoItem = {
    id: "",
    title: "",
    comment: "",
    status: true
    };
 
  saveItem(id: string, title: string, comment: string, status: boolean) : void {
    let item = this.todoItem;

    item.id = id;
    item.title = title;
    item.comment = comment;
    item.status = status;

    this.itemManager.saveItem(item);
  }

  constructor(private itemManager: ItemManagerService) {
  }

  ngOnInit() {
  }

}

export class TodoItem {
  id: string;
  title: string;
  comment: string;
  status: boolean;
}
