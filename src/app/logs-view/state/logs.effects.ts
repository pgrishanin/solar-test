import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { LogsService } from '../services/logs.service';
import { LogsActions, LogsApiActions } from './logs.actions';

@Injectable()
export class LogsEffects {

  fetchLogs$ = createEffect(() => this.actions$.pipe(
    ofType(LogsApiActions.fetchLogsList),
    exhaustMap(() => this.logsService.fetchLogs()
      .pipe(
        map(logs => LogsActions.setLogs({ logs })),
        // TODO: add error handling
        catchError(() => EMPTY)
      ))
    )
  );

  refreshLogs$ = createEffect(() => this.actions$.pipe(
    ofType(LogsApiActions.refreshLogsList),
    exhaustMap(() => this.logsService.refreshLogs()
      .pipe(
        map(logs => LogsActions.setLogs({ logs })),
        // TODO: add error handling
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private logsService: LogsService
  ) {}
}