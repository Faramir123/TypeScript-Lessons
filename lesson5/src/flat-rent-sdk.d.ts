export interface Hotel {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: number[];
  bookedDates: string[];
  price: number;
}
export interface FetchHotels {
  items: Hotel[];
}
export interface FetchFlat {
  items: Flat[];
}

export interface Flat {
  city: string;
  photo: string;
  checkInDate: Date | string;
  checkOutDate: Date | string;
  price: number[];
  totalPrice?: number;
}

export function cloneDate(date: string | Date): Date;

export function addDays(date: string | Date, days: number): Date;

export const backendPort: number;
export const localStorageKey: string;

export class FlatRentSdk {
  data: FetchHotels;
  constructor();
  get(id: number): object | null;
  search(options: Flat): Flat[];
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;
  _resetTime(date: Date): void;
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
  _generateDateRange(from: Date, to: Date): Date[];
  _generateTransactionId(): number;
  _areAllDatesAvailable(flat: Flat[], dateRange: Date[]): boolean;
  _formatFlatObject(flat: Flat, nightNumber: number): Flat[];
  _readDatabase(): FetchHotels;
  _writeDatabase(database: Hotel[]): void;
  _syncDatabase(database: Hotel[]): void;
}
