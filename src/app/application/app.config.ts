import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LOGS_FEATURE_KEY, logsReducer } from '../logs-view/state/logs.reducer';
import { provideEffects } from '@ngrx/effects';
import { LogsEffects } from '../logs-view/state/logs.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    provideStore(),
    provideState({ name: LOGS_FEATURE_KEY, reducer: logsReducer, }),
    provideEffects(LogsEffects),
],
};
