import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'app-botella',
    templateUrl: './botella.component.html',
    styleUrls: ['./botella.component.css']
})

export class BotellaComponent{
    botella = 'assets/img/botella.png';
    tam(t){
        swal({
            title: "Tamaños",
            text: "7 OZ, 12 Oz, 16 Oz, 22 Oz",
            icon: './assets/img/botella.png',
          });
    }

}