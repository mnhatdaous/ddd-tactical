import { BaseEntity } from './base.entity';
import { TariffType } from '../value-objects/tariff-type.value-object';

export class TariffObjectEntity extends BaseEntity {
  id: number;
  name: string;
  abbreviation: string;
  dataSource: string;
  description: string;
  objectValueLocation: string;
  tariffType: TariffType;
}
