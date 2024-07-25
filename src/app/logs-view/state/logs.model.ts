import { SortDirection } from "@angular/material/sort";

export interface LogsState {
    logsList: LogModel[];
    filters?: LogsFilters;
    sorting?: LogsSorting;
} 

export interface LogModel {
    date: string;
    type: string;
    product: string;
    status: string;
}

export interface LogsFilters {
    byProducts?: string;
    byStatuses?: string;
}

export interface LogsSorting {
    direction?: SortDirection;
    byField?: keyof LogModel;
}