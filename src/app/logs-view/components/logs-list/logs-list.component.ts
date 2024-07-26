import { Component, ViewChild } from '@angular/core';
import {MatSort, MatSortModule, Sort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { LogModel, LogsSorting } from '../../state/logs.model';
import { Store } from '@ngrx/store';
import { selectFilteredLogs, selectIsLoading } from '../../state/logs.selectors';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { LogsActions } from '../../state/logs.actions';
import { MatIconModule } from '@angular/material/icon';
import { LoadingOverlay } from '../../../common/loading-overlay/loading-overlay.component';

@Component({
  selector: 'logs-list',
  standalone: true,
  imports: [
    CommonModule,
    LoadingOverlay,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
  ],
  templateUrl: './logs-list.component.html',
  styleUrl: './logs-list.component.scss'
})
export class LogsList {
  logs$ = this.store.select(selectFilteredLogs);
  isLoading$ = this.store.select(selectIsLoading);

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
