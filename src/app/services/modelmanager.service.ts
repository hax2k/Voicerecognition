import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from '../componets/popup/dialog/dialog.component';
import { ResultComponent } from '../componets/popup/result/result.component';

@Injectable({
  providedIn: 'root'
})
export class ModelmanagerService {

  constructor(private dialog: MatDialog) { }

  openDialog(data: any = []): Observable<any> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    let dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
  openResult(data: any = []): Observable<any> {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    let dialogRef: MatDialogRef<ResultComponent> = this.dialog.open(ResultComponent, dialogConfig);
    return dialogRef.afterClosed();
  }

}
