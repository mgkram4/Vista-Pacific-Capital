import { boxTruckMetadata } from './boxtruck';
import { breweryMetadata } from './brewery';
import { cncMetadata } from './cnc';
import { constructionMetadata } from './construction';
import { craneMetadata } from './crane';
import { dentalMetadata } from './dental';
import { dumpTruckMetadata } from './dumptruck';
import { excavatorMetadata } from './excavator';
import { medicalMetadata } from './medical';
import { restaurantMetadata } from './restaurant';
import { usedEquipmentMetadata } from './used';

// lib/metadata/configs/index.ts
export * from './boxtruck';
export * from './brewery';
export * from './cnc';
export * from './construction';
export * from './crane';
export * from './dental';
export * from './dumptruck';
export * from './excavator';
export * from './medical';
export * from './restaurant';
export * from './used';

// Optional: Export all metadata as a collection
export const allEquipmentMetadata = {
  construction: constructionMetadata,
  medical: medicalMetadata,
  restaurant: restaurantMetadata,
  used: usedEquipmentMetadata,
  brewery: breweryMetadata,
  crane: craneMetadata,
  dental: dentalMetadata,
  excavator: excavatorMetadata,
  dumpTruck: dumpTruckMetadata,
  boxTruck: boxTruckMetadata,
  cnc: cncMetadata
};

// Optional: Helper function to get metadata by type
export function getMetadataByType(type: string) {
  return allEquipmentMetadata[type as keyof typeof allEquipmentMetadata];
}