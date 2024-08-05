import { BaseEntity } from './base.entity';
import { TariffType } from '@/domain/value-objects/tariff-type.value-object';

export class TariffObjectEntity extends BaseEntity {
  id: number;
  name: string;
  abbreviation: string;
  dataSource: string;
  description: string;
  objectValueLocation: string;
  tariffType: TariffType;

  constructor({
    id,
    name,
    abbreviation,
    dataSource,
    description,
    objectValueLocation,
    tariffType
  }: {
    id?: number;
    name: string;
    abbreviation: string;
    dataSource: string;
    description: string;
    objectValueLocation: string;
    tariffType: string;
  }) {
    super();
    this.id = id ?? 0;
    this.name = name;
    this.abbreviation = abbreviation;
    this.dataSource = dataSource;
    this.description = description;
    this.objectValueLocation = objectValueLocation;
    this.tariffType = new TariffType({ value: tariffType });
  }
}