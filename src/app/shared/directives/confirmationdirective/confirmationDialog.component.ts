import { Component, Inject, Output, EventEmitter } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 
@Component({
    selector: 'confirmationDialog',
    templateUrl: 'confirmationDialog.component.html',
  })
  export class ConfirmationDialog {
    @Output('confirm-click') click: any = new EventEmitter();
    constructor(
      public dialogRef: MatDialogRef<ConfirmationDialog>,
      @Inject(MAT_DIALOG_DATA) public data) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    onOkClick(){
        this.dialogRef.close();
        this.click.emit()
    }
  }