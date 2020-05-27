import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'app-lata',
    templateUrl: './lata.component.html',
    styleUrls: ['./lata.component.css']
})

export class LataComponent{

    lata = 'assets/img/lata.png';

    tam(t){
        swal({
            title: "Tamaños",
            text: "7 OZ, 12 Oz, 16 Oz, 22 Oz",
            icon: './assets/img/lata.png',
          });
    }
}