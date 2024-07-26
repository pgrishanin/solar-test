import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ALL_PRODUCTS, ALL_STATUSES } from './model';
import { Store } from '@ngrx/store';
import { uniq } from 'lodash';
import { selectAllLogs } from '../../state/logs.selectors';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogsActions } from '../../state/logs.actions';
import { LogsFilters } from '../../state/logs.model';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'logs-filter',
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './logs-filter.component.html',
  styleUrl: './logs-filter.component.scss'
})
export class LogsFilter {
  productSelector = new FormControl(ALL_PRODUCTS, [Validators.required]);
  statusSelector = new FormControl(ALL_STATUSES, [Validators.required]);

  data$ = this.store.select(selectAllLogs).pipe(
    map(logs => {
      return {
        statuses: uniq(logs.map(log => log.status)),
        products: uniq(logs.map(log => log.product))
      }
    })
  );

  constructor(private store: Store) {}

  filterChange() {
    let filters: LogsFilters | undefined;
    if (this.productSelector.value !== ALL_PRODUCTS || this.statusSelector.value !== ALL_STATUSES) {
      filters = {
        byProducts: this.productSelector.value !== ALL_PRODUCTS ? this.productSelector.value as string : undefined,
        byStatuses: this.statusSelector.value !== ALL_STATUSES ? this.statusSelector.value as string : undefined,
      }
    }

    this.store.dispatch(LogsActions.setFilters({
      filters,
    }));
    
    console.log(this.productSelector.value)
    console.log(this.statusSelector.value)
  }
}
