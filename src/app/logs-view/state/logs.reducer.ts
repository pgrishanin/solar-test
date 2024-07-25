import { createReducer, on } from '@ngrx/store';

import { LogsActions } from './logs.actions';
import { LogsState } from './logs.model';

export const LOGS_FEATURE_KEY = 'logs';

export const initialState: LogsState = {
  logsList: [],
};

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.setLogs, (state, { logs }) => ({
    ...state,
    logsList: logs,
  })),
  on(LogsActions.setFilters, (state, { filters }) => ({
    ...state,
    filters,
  })),
  on(LogsActions.setSorting, (state, { sorting }) => ({
    ...state,
    sorting,
  })),
);