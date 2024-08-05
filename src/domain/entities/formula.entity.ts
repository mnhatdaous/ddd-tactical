import { BaseEntity } from './base.entity';
import { TariffObjectEntity } from './tariff-object.entity';

export class FormulaEntity extends BaseEntity {
  id: number;
  name: string;
  tariffObjects: TariffObjectEntity[];

  constructor({
    id,
    name,
    tariffObjects,
  }: {
    id?: number;
    name: string;
    tariffObjects: TariffObjectEntity[];
  }) {
    super();
    this.id = id ?? 0;
    this.name = name;
    this.tariffObjects = tariffObjects;
  }
}
