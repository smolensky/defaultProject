import { Injectable } from '@angular/core';
import { TodoItem, TodoItems } from '../dataLayer/data-manager.service';
import { Subject } from 'rxjs';
import { DataManagerService } from '../dataLayer/data-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentManagerService {
  private itemSource = new Subject<any>();
  private listSource = new Subject<any>();

  componentMethodCalled1$ = this.itemSource.asObservable();
  componentMethodCalled2$ = this.listSource.asObservable();

  transferItem(item: TodoItem) {
    this.itemSource.next(item);
  }

  transferList(items: TodoItems) {
    this.listSource.next(items);
  }

  constructor() { }
}
