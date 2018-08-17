import { Injectable } from '@angular/core';
import { TodoItems, TodoItem, Category } from '../dataLayer/data-manager.service';
import { DataManagerService } from '../dataLayer/data-manager.service';
import { ComponentManagerService } from './component-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {
  writeId() : string {
    let result: string = "_";

    let idPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 7; i++){
      result += idPool.charAt(Math.floor(Math.random() * idPool.length));
    }

    return result;
  }

  saveItem(item: TodoItem, cat: Category, cloned?: boolean) : TodoItems {
    let result: TodoItems;
debugger;
    if(!(item.id.length > 0) || cloned){
      this.dataManager.saveItem(this.writeId(), item)
      .subscribe(val => this.componentManager.transferList(val));
    } else {
      this.dataManager.editItem(item)
      .subscribe(val => this.componentManager.transferList(val));
    }

    return result;
  }

  deleteItem(item: TodoItem) : void {
    this.dataManager.deleteItem(item)
      .subscribe(val => this.componentManager.transferList(val));
  }

  deleteAll() : void {
    alert("Not implemented");
  }

  constructor(private list: TodoItems, private dataManager: DataManagerService, private componentManager: ComponentManagerService) {
    this.dataManager.getAllItems().subscribe(val => this.componentManager.transferList(val));
  }
}
