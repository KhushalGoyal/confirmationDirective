import { Directive, Input, HostListener, EventEmitter, Output } from '@angular/core'
import { ConfirmationDialog } from './confirmationDialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Directive({
    selector : '[confirmation-message],[on-confirm-click]'
})


export class ConfirmationDirective{
    @Input('confirmation-message') confMessage : string;
    @Output('on-confirm-click') confOk : any = new EventEmitter()
    constructor(
        private dialog: MatDialog,
    ){}

    @HostListener('click') onClick (){
        const dialogRef = this.dialog.open(ConfirmationDialog, {
            width: '250px',
            data: {data : this.confMessage}
          });
          
          dialogRef.componentInstance.click.subscribe(result => {
              this.confOk.emit(result)
          })
    }

    

}