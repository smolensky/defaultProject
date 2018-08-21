import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { ComponentManagerService } from '../services/component-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  getAllItems() : Observable<TodoItems> {
    let result: Observable<any>;

    result = this.http.get('http://localhost:58468/api/default');

    return result;
  }

  getAllCategories() : Observable<Category> {
    let result : Observable<any>;

    result = this.http.get('http://localhost:58468/api/category');

    return result;
  }

  saveItem(item) : Observable<any> {
    debugger;
    let result = this.http.post('http://localhost:58468/api/default', item, httpOptions);
    
    return result;
  }

  saveCategory(item) : Observable<any> {
    let result = this.http.post('http://localhost:58468/api/category', item, httpOptions);

    return result;
  }

  editItem(item) : Observable<any> {
    let result = this.http.put('http://localhost:58468/api/default/' + item.id, item, httpOptions);

    return result;
  }

  deleteItem(item) : Observable<any> {
    let result;

    result = this.http.delete('http://localhost:58468/api/default/' + item.id);

    return result;
  }

  constructor(private http: HttpClient) {

  }
}

export class TodoItems {
  TodoItems: Array<TodoItem>;
}

export class TodoItem {
  id;
  title;
  status;
  category?: Category;
}

export class Category {
  id;
  title;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};