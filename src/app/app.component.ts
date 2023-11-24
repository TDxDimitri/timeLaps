import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardDispenserComponent } from './card-dispenser/card-dispenser.component';
import { RedCardComponent } from './red-card/red-card.component';
import { GreenCardComponent } from './green-card/green-card.component';
import { YellowCardComponent } from './yellow-card/yellow-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TimeLapsGame';
  isOpened: boolean = false;

  constructor(private dialogRef: MatDialog) {}

  openDialog() {
    if (!this.isOpened) {
      this.isOpened = true;
      const dialogRef = this.dialogRef.open(CardDispenserComponent, {
        position: {
          top: '50%',
          left: '50%',
        },
        panelClass: 'customModal' // Ajouter une classe personnalisée pour le style
      });

      // Set a 60-second timeout to close the dialog
      setTimeout(() => {
        dialogRef.close();
        this.isOpened = false;
      }, 30000); // 60 seconds in milliseconds

      // Detect when the dialog is closed
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed', result);
      });
    }
  }
  openDialogR() {
    if (!this.isOpened) {
      this.isOpened = true;
      const dialogRef = this.dialogRef.open(RedCardComponent, {
        position: {
          top: '50%',
          left: '50%',
        },
        panelClass: 'customModal' // Ajouter une classe personnalisée pour le style
      });

      // Set a 60-second timeout to close the dialog
      setTimeout(() => {
        dialogRef.close();
        this.isOpened = false;
      }, 30000); // 60 seconds in milliseconds

      // Detect when the dialog is closed
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed', result);
      });
    }
  }
  openDialogG() {
    if (!this.isOpened) {
      this.isOpened = true;
      const dialogRef = this.dialogRef.open(GreenCardComponent, {
        position: {
          top: '50%',
          left: '50%',
        },
        panelClass: 'customModal' // Ajouter une classe personnalisée pour le style
      });

      // Set a 60-second timeout to close the dialog
      setTimeout(() => {
        dialogRef.close();
        this.isOpened = false;
      }, 30000); // 60 seconds in milliseconds

      // Detect when the dialog is closed
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed', result);
      });
    }
  }
  openDialogY() {
    if (!this.isOpened) {
      this.isOpened = true;
      const dialogRef = this.dialogRef.open(YellowCardComponent, {
        position: {
          top: '50%',
          left: '50%',
        },
        panelClass: 'customModal' // Ajouter une classe personnalisée pour le style
      });

      // Set a 60-second timeout to close the dialog
      setTimeout(() => {
        dialogRef.close();
        this.isOpened = false;
      }, 30000); // 60 seconds in milliseconds

      // Detect when the dialog is closed
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed', result);
      });
    }
  }
}
