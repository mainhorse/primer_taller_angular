import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class RegistroComponent{
    imagen = 'assets/img/botella.png';
    nuevo(nombre,cont,correo){
        localStorage.setItem('nombre',nombre);
        localStorage.setItem('password',cont);
        localStorage.setItem('correo',correo);
        swal({
            title: "registrado"
        })
    }
}