import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PagenotfoundComponent, HighlightDirective],
  exports: [FormsModule, CommonModule, ReactiveFormsModule, HighlightDirective]
})
export class SharedModule { }
