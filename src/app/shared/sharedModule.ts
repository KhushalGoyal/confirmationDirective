import { NgModule } from '@angular/core'
import { ConfirmationDirective } from './directives/confirmationdirective/ConfirmationDirective';
import { MatButtonModule } from '@angular/material/'
import { MatDialogModule } from '@angular/material/dialog'
import { ConfirmationDialog } from './directives/confirmationdirective/confirmationDialog.component';

@NgModule({
    declarations:[
        ConfirmationDirective,
        ConfirmationDialog
    ],
    imports : [
        MatButtonModule,
        MatDialogModule
    ],
    exports : [
        ConfirmationDirective
    ],
    providers: [ ]
})

export class SharedModule{

}