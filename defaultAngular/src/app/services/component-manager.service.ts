import { Injectable } from '@angular/core';
import { TodoItem, TodoItems, Category } from '../dataLayer/data-manager.service';
import { Subject } from 'rxjs';
import { DataManagerService } from '../dataLayer/data-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentManagerService {
  private itemSource = new Subject<any>();
  private listSource = new Subject<any>();
  private categoriesSource = new Subject<any>();

  itemSourceMethodCalled$ = this.itemSource.asObservable();
  listSourceMethodCalled$ = this.listSource.asObservable();
  categoriesSourceMethodCalled$ = this.categoriesSource.asObservable();

  transferItem(item: TodoItem) {
    this.itemSource.next(item);
  }

  transferList(items: TodoItems) {
    this.listSource.next(items);
  }

  transferCategories(cat: Category) {
    this.categoriesSource.next(cat);
  }

  constructor() { }
}
