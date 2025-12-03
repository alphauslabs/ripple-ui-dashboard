export type Vendors = 'aws' | 'azure' | 'gcp';

export type Status = 'active' | 'inactive';

// Define a generic type for vendor settings
export type VendorSettings<T = unknown> = {
  aws: T[];
  azure: T[];
  gcp: T[];
};

export const VendorDefaults: VendorSettings = {
  aws: [],
  azure: [],
  gcp: [],
};
