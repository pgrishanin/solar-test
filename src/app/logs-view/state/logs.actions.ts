import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LogModel, LogsFilters, LogsSorting } from './logs.model';

export const LogsActions = createActionGroup({
  source: 'Logs',
  events: {
    'Set Logs': props<{ logs: LogModel[] }>(),
    'Set Filters': props<{ filters?: LogsFilters }>(),
    'Set Sorting': props<{ sorting?: LogsSorting }>(),
    'Set Is Loading': props<{ isLoading: boolean }>(),
  },
});

export const LogsApiActions = createActionGroup({
  source: 'Logs API',
  events: {
    'Fetch Logs List': emptyProps(),
    'Refresh Logs List': emptyProps(),
  },
});