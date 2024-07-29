import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LogModel, LogsFilters, LogsSorting } from './logs.model';
import { LogsActionsEnum, LogsApiActionsEnum } from './constants';

export const LogsActions = createActionGroup({
  source: 'Logs',
  events: {
    [LogsActionsEnum.SET_LOGS]: props<{ logs: LogModel[] }>(),
    [LogsActionsEnum.SET_FILTERS]: props<{ filters?: LogsFilters }>(),
    [LogsActionsEnum.SET_SORTING]: props<{ sorting?: LogsSorting }>(),
    [LogsActionsEnum.SET_IS_LOADING]: props<{ isLoading: boolean }>(),
  },
});

export const LogsApiActions = createActionGroup({
  source: 'Logs API',
  events: {
    [LogsApiActionsEnum.FETCH_LOGS_LIST]: emptyProps(),
    [LogsApiActionsEnum.REFRESH_LOGS_LIST]: emptyProps(),
  },
});