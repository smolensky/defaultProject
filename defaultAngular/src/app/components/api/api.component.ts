import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';
import { Config } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  config;

  getAllValues() {
    let result;
    let test = this.dataManager.getAllValues().subscribe(item => result = item);
    return result;
  }

  constructor(private dataManager: DataManagerService) { }

  ngOnInit() {
    this.config = this.getAllValues();
  }

}
