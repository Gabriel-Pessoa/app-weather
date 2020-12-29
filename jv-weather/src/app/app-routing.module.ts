import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/containers/home/home.page';
import { BookmarksPage } from './pages/bookmarks/containers/bookmarks/bookmarks.page';
import { TopTenCitiesPage } from './pages/top-ten-cities/containers/top-ten-cities/top-ten-cities.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'bookmarks', component: BookmarksPage },
  { path: 'details', loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule) },
  { path: 'toptencities', component: TopTenCitiesPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
