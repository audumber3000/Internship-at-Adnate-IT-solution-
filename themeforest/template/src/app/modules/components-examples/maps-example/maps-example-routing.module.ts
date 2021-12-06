import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/google_maps', pathMatch: 'full' },
  { path: 'google_maps', component: GoogleMapsComponent, data: { animation: 'GoogleMaps' } },
  { path: 'leaflet_map', component: LeafletMapComponent, data: { animation: 'LeafletMap' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsExampleRoutingModule {}
