import { Component, HostBinding } from '@angular/core';
import { LogsRefresh } from './components/logs-refresh/logs-refresh.component';
import { LogsList } from './components/logs-list/logs-list.component';
import { LogsFilter } from './components/logs-filter/logs-filter.component';
import { Store } from '@ngrx/store';
import { LogsApiActions } from './state/logs.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'logs-view',
  standalone: true,
  imports: [
    CommonModule,
    LogsRefresh,
    LogsList,
    LogsFilter,
  ],
  templateUrl: './logs-view.component.html',
  styleUrl: './logs-view.component.scss'
})
export class LogsView {
  @HostBinding('class.logs-view') someField: boolean = true;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(LogsApiActions.fetchLogsList());
  }
}
