import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LogsState } from './logs.model';
import { LOGS_FEATURE_KEY } from './logs.reducer';
import { filterLogs, sortLogs } from './utils';

export const selectFilteredLogsState = createFeatureSelector<LogsState>(LOGS_FEATURE_KEY);

export const selectAllLogs = createSelector(
  selectFilteredLogsState,
  (state) => state.logsList,
);

export const selectIsLoading = createSelector(
  selectFilteredLogsState,
  (state) => state.isLoading,
);

export const selectFilteredLogs = createSelector(
    selectFilteredLogsState,
    (state) => {
      let logs = state.logsList;
      if (state.filters) {
        logs = filterLogs(logs, state.filters);
      }
      if (state.sorting) {
        logs = sortLogs(logs, state.sorting);
      }
      return logs;
    }
  );
