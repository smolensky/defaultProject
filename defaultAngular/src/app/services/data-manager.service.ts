import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { TodoItems, TodoItem } from '../models/items-list';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  getAllValues() : Observable<any> {
    let result: Observable<any>;

    let test = this.http.get('http://localhost:58468/api/values', { observe: 'body'});
    result = test.pipe(tap(val => this.storeResp(val)));

    // debugger;
    return result;
  }

  storeResp(val){
    debugger;
    let item = val;
  }

  saveAllValues(list: Value[]) : Observable<Value[]> {
    let result: Observable<Value[]>;

    result = this.http.post<Value[]>('http://localhost:58468/api/values', list);

    return result;
  }


  constructor(private http: HttpClient) { }
}

interface Value {
  value: string;
}

interface TodoItem {
  id: string;
  title: string;
  comment: string;
  status: boolean;
}