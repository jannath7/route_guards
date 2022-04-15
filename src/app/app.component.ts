import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route_guards';
  content="Click-Special"
  content2="Click-Child"

  allowSpecial(){
    sessionStorage.setItem("token","dummy");
    this.content="special route";
  }

  allowChild(){
    sessionStorage.setItem("childtoken","dummy");
    this.content="child route";
  }
}
