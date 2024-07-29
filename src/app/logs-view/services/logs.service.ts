import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogModel } from '../state/logs.model';

// TODO: Use env variables for the host URL
@Injectable({ providedIn: 'root' })
export class LogsService {
  constructor(private http: HttpClient) {}

  fetchLogs(): Observable<Array<LogModel>> {
    return this.http
      .get<{ logs:  LogModel[] }>(
        process.env?.['NODE_ENV'] === 'development' 
          ? 'http://localhost:3000/fetch'
          : 'https://pgrishanin.github.io/solar-test/static/logs.json'
      )
      .pipe(map((response) => response.logs || []));
  }

  refreshLogs(): Observable<Array<LogModel>> {
    return this.http
      .get<{ new_logs: LogModel[] }>(
        process.env?.['NODE_ENV'] === 'development' 
        ? 'http://localhost:3000/refresh'
        : 'https://pgrishanin.github.io/solar-test/static/new_logs.json'
      )
      .pipe(map((response) => response.new_logs || []));
  }
}