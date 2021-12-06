import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsExampleRoutingModule } from './maps-example-routing.module';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { SharedCoreModule } from '../../shared-modules/shared-core/shared-core.module';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [GoogleMapsComponent, LeafletMapComponent],
  imports: [CommonModule, MapsExampleRoutingModule, SharedCoreModule, LeafletModule.forRoot()],
})
export class MapsExampleModule {}
