import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDispenserComponent } from './card-dispenser/card-dispenser.component';

const routes: Routes = [
  {path: 'cards', component: CardDispenserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
