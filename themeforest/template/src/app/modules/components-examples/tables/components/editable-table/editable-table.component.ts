import { Component, OnInit } from '@angular/core';
import { AGENTS_DATA, OverWatchAgent } from '../../assets/overwatch.agent';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.scss'],
})
export class EditableTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'username', 'status'];
  dataSource = AGENTS_DATA;
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({ agents: this.rows });

  columnsAliases = {
    position: '#',
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    status: 'Status',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    AGENTS_DATA.forEach((d: OverWatchAgent) => this.addRow(d, false));
    this.updateView();
    this.form.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  addRow(d?, noUpdate?: boolean) {
    const row = this.fb.group({
      position: [d && d.position ? d.position : null, []],
      firstName: [d && d.firstName ? d.firstName : null, []],
      lastName: [d && d.lastName ? d.lastName : null, []],
      username: [d && d.username ? d.username : null, []],
      status: [d && d.status ? d.status : null, []],
    });

    this.rows.push(row);
    if (!noUpdate) {
      this.updateView();
    }
  }

  updateView() {}
}
