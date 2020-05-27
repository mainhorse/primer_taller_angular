import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BotellaComponent } from './components/botella/botella.component'
import { LataComponent } from './components/lata/lata.component';
import { BarrilComponent } from './components/barril/barril.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';

const routes: Routes=[
    {path:'botella', component: BotellaComponent},
    {path:'lata', component: LataComponent},
    {path:'barril', component: BarrilComponent},
    {path:'registro', component: RegistroComponent},
    {path:'ingreso', component: IngresoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}