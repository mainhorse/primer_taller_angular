import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent{
    mostar(m){
        document.getElementById("ulLista").style.display ="block";
    }
    
    esconder(e){
        document.getElementById("ulLista").style.display ="none";
    }
    
}