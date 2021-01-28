import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualAction } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { VirtualwalkComponent } from './virtualwalk/virtualwalk.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'policy', component: PolicyComponent},
  { path: 'virtualwalk', component: VirtualwalkComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
