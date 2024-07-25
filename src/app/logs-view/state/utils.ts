import { LogModel, LogsFilters, LogsSorting } from "./logs.model";
import { sortBy } from 'lodash';

export const filterLogs = (logs: LogModel[], filters: LogsFilters): LogModel[] => {
    return logs.filter(log => {
        if (filters.byProducts && log.product !== filters.byProducts) {
            return false;
        }
        if (filters.byStatuses && log.status !== filters.byStatuses) {
            return false;
        }

        return true;
    });
}

export const sortLogs = (logs: LogModel[], sorting: LogsSorting): LogModel[] => {
    if (sorting.byField && sorting.direction) {
        if (sorting.direction === 'asc') {
            return sortBy(logs, sorting.byField).reverse();
        } else {
            return sortBy(logs, sorting.byField);
        }
        
    }

    return logs;
}