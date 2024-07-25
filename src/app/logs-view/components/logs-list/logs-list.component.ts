import { Component, ViewChild } from '@angular/core';
import {MatSort, MatSortModule, Sort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { LogModel, LogsSorting } from '../../state/logs.model';
import { Store } from '@ngrx/store';
import { selectFilteredLogs } from '../../state/logs.selectors';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { LogsActions } from '../../state/logs.actions';

@Component({
  selector: 'logs-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
  ],
  templateUrl: './logs-list.component.html',
  styleUrl: './logs-list.component.scss'
})
export class LogsList {
  // @Input() logs: Observable<LogModel[]> = of([]);
  logs = this.store.select(selectFilteredLogs);
  displayedColumns: (keyof LogModel)[] = ['date', 'type', 'product', 'status'];

  constructor(private store: Store) {}

  @ViewChild(MatSort) sort: MatSort;

  sortData(sort: Sort) {
    const sortingPayload: LogsSorting | undefined = sort.active ? {
      direction: sort.direction,
      byField: sort.active as keyof LogModel,
    } : undefined;

    this.store.dispatch(LogsActions.setSorting({
      sorting: sortingPayload
    }));
  }
}
