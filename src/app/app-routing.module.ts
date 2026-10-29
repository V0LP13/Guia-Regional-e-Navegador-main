import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'teste2',
    loadChildren: () => import('./teste2/teste2.module').then( m => m.Teste2PageModule)
  },
  {
    path: 'santos',
    loadChildren: () => import('./santos/santos.module').then( m => m.SantosPageModule)
  },
  {
    path: 'praiagrande',
    loadChildren: () => import('./praiagrande/praiagrande.module').then( m => m.PraiagrandePageModule)
  },
  {
    path: 'bertioga',
    loadChildren: () => import('./bertioga/bertioga.module').then( m => m.BertiogaPageModule)
  },
  {
    path: 'guaruja',
    loadChildren: () => import('./guaruja/guaruja.module').then( m => m.GuarujaPageModule)
  },
  {
    path: 'saovicente',
    loadChildren: () => import('./saovicente/saovicente.module').then( m => m.SaovicentePageModule)
  },
  {
    path: 'cubatao',
    loadChildren: () => import('./cubatao/cubatao.module').then( m => m.CubataoPageModule)
  },
  {
    path: 'mongagua',
    loadChildren: () => import('./mongagua/mongagua.module').then( m => m.MongaguaPageModule)
  },
  {
    path: 'itanhaem',
    loadChildren: () => import('./mongagua/itanhaem/itanhaem.module').then( m => m.ItanhaemPageModule)
  },
  {
    path: 'peruibe',
    loadChildren: () => import('./peruibe/peruibe.module').then( m => m.PeruibePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
