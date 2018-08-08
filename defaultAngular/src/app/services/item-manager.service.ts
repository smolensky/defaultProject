import { Injectable } from '@angular/core';
import { TodoItems, TodoItem } from '../models/items-list';
import { ComponentManagerService } from './component-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {
  itemsList;

  writeId() : string {
    let result: string = "_";

    let idPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 7; i++){
      result += idPool.charAt(Math.floor(Math.random() * idPool.length));
    }

    return result;
  }

  saveItem(item: TodoItem) : TodoItems {
    let result: TodoItems;

    if(item.status === undefined){
      item.status = true;
    }

    this.itemsList.unshift({
      id: this.writeId(),
      title: item.title,
      comment: item.comment,
      status: item.status
    });
    result = this.itemsList;

    return result;
  }

  editItem(item: TodoItem) : TodoItem {
    let result: TodoItem;

    result = this.itemsList.find(x => x.id == item.id);
    
    return result;
  }

  deleteItem(item: TodoItem) : TodoItems {
    let result: TodoItems;

    for(let i = 0; i < this.itemsList.length; i++){
      if(this.itemsList[i].id === item.id){
        let index = this.itemsList.indexOf(this.itemsList[i]);
        this.itemsList.splice(index, 1);
      }
    }

    return result;
  }

  constructor(private list: TodoItems) {
    this.itemsList = list.todoItems;
  }
}