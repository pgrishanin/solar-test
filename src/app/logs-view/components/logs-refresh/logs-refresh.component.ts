import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { LogsApiActions } from '../../state/logs.actions';

@Component({
  selector: 'logs-refresh',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './logs-refresh.component.html',
  styleUrl: './logs-refresh.component.scss'
})
export class LogsRefresh {
  constructor(private store: Store) {}

  onRefresh() {
    this.store.dispatch(LogsApiActions.refreshLogsList())
  }
}
