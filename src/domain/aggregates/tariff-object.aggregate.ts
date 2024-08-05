import { TariffObjectEntity } from '@/domain/entities/tariff-object.entity';

export class TariffObjectAggregate {
  constructor(public tariffObject: TariffObjectEntity) {}
}
