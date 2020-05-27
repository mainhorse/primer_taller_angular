import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'app-barril',
    templateUrl: './barril.component.html',
    styleUrls: ['./barril.component.css']
})

export class BarrilComponent{
    barril = 'assets/img/barril.png';
    tam(t){
        swal({
            title: "Tamaños",
            text: "7 OZ, 12 Oz, 16 Oz, 22 Oz",
            icon: './assets/img/barril.png',
          });
    }
}