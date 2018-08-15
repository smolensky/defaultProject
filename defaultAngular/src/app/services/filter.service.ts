import { Injectable } from '@angular/core';
import { TodoItems, DataManagerService } from '../dataLayer/data-manager.service';
import { ComponentManagerService } from './component-manager.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  search(searchTerm: string) : TodoItems {
    let result;

    this.dataManager.getAllItems()
    .subscribe(val => this.componentManager.transferList(this.useTerm(searchTerm, val)));

    return result;
  }

  filterByStatus(status: boolean) : TodoItems {
    let result;
    
    if(status === undefined){
      this.search("");
    } else {
      this.dataManager.getAllItems()
      .subscribe(val => this.componentManager.transferList(this.useStatus(status, val)));
    }

    return result;
  }

  useTerm(searchTerm, val) {
    let result = val.filter(x => x.title.includes(searchTerm));

    return result;
  }

  useStatus(searchTerm, val) {
    let result = val.filter(x => x.status == searchTerm);

    return result;
  }

  constructor(private dataManager: DataManagerService, 
    private componentManager: ComponentManagerService) {
  }
}
