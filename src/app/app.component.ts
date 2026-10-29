import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder/inbox', icon: 'home' },
    { title: 'Bertioga', url: '/bertioga', icon: 'location' },
    { title: 'Cubatão', url: '/cubatao', icon: 'location' },
    { title: 'Guarujá', url: '/guaruja', icon: 'location' },
    { title: 'Itanhaém', url: '/itanhaem', icon: 'location' },
    { title: 'Mongaguá', url: '/mongagua', icon: 'location' },
    { title: 'Peruíbe', url: '/peruibe', icon: 'location' },
    { title: 'Praia Grande', url: '/praiagrande', icon: 'location' },
    { title: 'Santos', url: '/santos', icon: 'location' },
    { title: 'São Vicente', url: '/saovicente', icon: 'location' },
  ];
  public labels = ['Cidades da Baixada Santista'];
  constructor() {}
}
