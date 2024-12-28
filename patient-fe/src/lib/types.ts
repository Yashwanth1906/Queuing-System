export interface Hospital {
  id: string;
  code: string;
  name: string;
  location: string;
  city: string;
  state: string;
  dbURL: string;
}


export interface Department {
  id: string;
  name: string;
  description: string;
  hospitalId: string;
}

export interface OPSlot {
  id: number;
  date: string;
  slot: string;
  count: number;
  deptid: string;
  isAvailable: boolean;
}

export interface DateSlot {
  date: string;
  day: string;
  isAvailable: boolean;
}
