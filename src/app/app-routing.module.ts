import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChomeComponent } from './chome/chome.component';
import { ModerateGuard } from './guards/moderate.guard';
import { OrdinaryGuard } from './guards/ordinary.guard';
import { SpecialGuard } from './guards/special.guard';
import { Child1Component } from './moderate/child1/child1.component';
import { Child2Component } from './moderate/child2/child2.component';
import { ModerateComponent } from './moderate/moderate.component';
import { OrdinaryComponent } from './ordinary/ordinary.component';
import { SpecialComponent } from './special/special.component';

const routes: Routes = [
  {path:"",component:ChomeComponent},
  {path:"special",component:SpecialComponent,canActivate:[SpecialGuard]},
  {path:"ordinary",component:OrdinaryComponent, canDeactivate:[OrdinaryGuard]},
  {path:"moderate",component:ModerateComponent,canActivateChild:[ModerateGuard], children:[
    { path:"child1",component:Child1Component},{path:"child2",component:Child2Component}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
