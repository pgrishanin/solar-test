import { createReducer, on } from '@ngrx/store';

import { LogsActions, LogsApiActions } from './logs.actions';
import { LogsState } from './logs.model';

export const LOGS_FEATURE_KEY = 'logs';

export const initialState: LogsState = {
  logsList: [],
  isLoading: false,
};

export const logsReducer = createReducer(
  initialState,
  on(LogsActions.setLogs, (state, { logs }) => ({
    ...state,
    logsList: logs,
    isLoading: false,
  })),
  on(LogsActions.setFilters, (state, { filters }) => ({
    ...state,
    filters,
  })),
  on(LogsActions.setIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(
    LogsApiActions.fetchLogsList,
    LogsApiActions.refreshLogsList,
    (state) => ({
      ...state,
      isLoading: true,
    }),
  )
);