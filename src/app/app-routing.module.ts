import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { EntryDetailsComponent } from './components/entry-details/entry-details.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'entries', component: EntriesListComponent },
  { path: 'entries/:id', component: EntryDetailsComponent },
  { path: 'add', component: AddEntryComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
