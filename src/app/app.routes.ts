import { Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { PartsOfTranslationComponent } from './pages/parts-of-translation/parts-of-translation.component';
import { LocalizeFromJsComponent } from './pages/localize-from-js/localize-from-js.component';
import { InternationalizationInAttributesComponent } from './pages/internationalization-in-attributes/internationalization-in-attributes.component';
import { InternationalizationInExpressionsComponent } from './pages/internationalization-in-expressions/internationalization-in-expressions.component';

export const routes: Routes = [
  { path: '', component: HelloComponent }, // Default route
  { path: 'parts-of-translation-unit', component: PartsOfTranslationComponent },
  { path: 'localize-from-js', component: LocalizeFromJsComponent },
  { path: 'localize-from-expressions', component: InternationalizationInExpressionsComponent },
  { path: 'localize-in-attributes', component: InternationalizationInAttributesComponent },
  { path: '**', redirectTo: '' }
];
