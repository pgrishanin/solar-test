import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogModel } from '../state/logs.model';

@Injectable({ providedIn: 'root' })
export class LogsService {
  constructor(private http: HttpClient) {}

  fetchLogs(): Observable<Array<LogModel>> {
    return this.http
      .get<{ logs:  LogModel[] }>(
        'http://localhost:3000/fetch'
      )
      .pipe(map((response) => response.logs || []));
  }

  refreshLogs(): Observable<Array<LogModel>> {
    return this.http
      .get<{ new_logs: LogModel[] }>(
        'http://localhost:3000/refresh'
      )
      .pipe(map((response) => response.new_logs || []));
  }
}