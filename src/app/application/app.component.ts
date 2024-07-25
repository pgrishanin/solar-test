import { Component } from '@angular/core';
import { LogsView } from '../logs-view/logs-view.component';
import { StoreModule } from '@ngrx/store';
import { logsReducer } from '../logs-view/state/logs.reducer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LogsView
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'solar-test';
}
