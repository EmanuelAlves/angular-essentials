import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from '../list/list.component';
import { CreateCharacterComponent } from '../create-character/create-character.component';
import { TabsComponent } from '../tabs/tabs.component';


const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent}
  ]},
  { path: 'new-character', component: CreateCharacterComponent},
  { path: '**', redirectTo: '/characters'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
