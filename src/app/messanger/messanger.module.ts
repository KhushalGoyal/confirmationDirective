import { NgModule } from '@angular/core';
import { MessangerRoutingModule } from './messanger-routing.mdoule';
import { MessangerComponent } from './messanger.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/sharedModule';



@NgModule({
  declarations: [
    MessangerComponent
  ],
  imports: [
    CommonModule,
    MessangerRoutingModule,
    SharedModule
  ],
})
export class MessangerModule { }
