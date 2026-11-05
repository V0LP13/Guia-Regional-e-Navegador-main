import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cep: string = '';

  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async pesquisar(): Promise<void> {
    const cep = this.cep.replace(/\D/g, '');

    switch (cep) {
      case '11704900':
        this.router.navigate(['/praiagrande']);
        break;
      case '11088190':
        this.router.navigate(['/santos']);
        break;
      case '11250021':
        this.router.navigate(['/bertioga']);
        break;
      case '11410385':
        this.router.navigate(['/guaruja']);
        break;
      case '11300100':
        this.router.navigate(['/saovicente']);
        break;
      case '11531430':
        this.router.navigate(['/cubatao']);
        break;
      case '11709000':
        this.router.navigate(['/mongagua']);
        break;
      case '11740972':
        this.router.navigate(['/itanhaem']);
        break;
      case '11770000':
        this.router.navigate(['/peruibe']);
        break;
      default:
        const alert = await this.alertController.create({
          header: 'Não foi possível encontrar o CEP',
          message: 'Digite um CEP válido',
          buttons: ['Ok'],
        });
        await alert.present();
        break;
    }
  }
}
