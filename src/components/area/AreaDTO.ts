export interface AreaDTO {
    _id: string;
    name: string;
    available: boolean;
    description: string;
    type: string;
    capacity: number;
    openingHours: {
      monday: Object;
      tuesday: Object;
      wednesday: Object;
      thursday: Object;
      friday: Object;
      saturday: Object;
      sunday: Object | null;
    };
    disabledAccess: boolean;
    pictures: Array<any>;
    __v: number;
  }
  