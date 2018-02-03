import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazycComponent } from './lazyc/lazyc.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  { path: '', component: LazycComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [LazycComponent]
})
export class LazyModule { }
