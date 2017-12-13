import { PropertyAddComponent } from './property-add/propertyadd.component';
import { PropertyListComponent } from './property-list/propertylist.component';
import { PropertyListModule } from './property-list/propertylist.module';
export const containers: any[] = [PropertyAddComponent, PropertyListComponent, PropertyListModule];

export * from './property-add/propertyadd.component';
export * from './property-list/propertylist.component';
export * from './property-list/propertylist.module';
