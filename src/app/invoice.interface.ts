/**
 * Title: invoice.interface.ts
 * Author: Emily Richter
 * Date: 6 September 2020
 * Description: Invoice interface
 */

import { IRepairServices } from './repair-services.interface';

export interface Invoice {
  lineitems: Array<IRepairServices>;
  partsAmount: number;
  laborAmount: number;
  orderDate: string;
}
