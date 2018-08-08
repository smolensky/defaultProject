import { Injectable } from '@angular/core';
import { TodoItems } from '../models/items-list';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  myList;

  search(searchTerm: string) : TodoItems {
    let result: TodoItems;

    result = this.myList.filter(x => x.title.includes(searchTerm));

    return result;
  }

  filterByStatus(status: boolean) : TodoItems {
    let result: TodoItems;

    result = this.myList.filter(x => x.status === status);

    return result;
  }

  constructor(private list: TodoItems) {
    this.myList = list.todoItems;
  }
}
