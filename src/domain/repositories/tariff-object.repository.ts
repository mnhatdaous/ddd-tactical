import { TariffObjectAggregate } from '@/domain/aggregates/tariff-object.aggregate';

export abstract class TariffObjectRepository {
  abstract save(tariffObjectAggregate: TariffObjectAggregate): Promise<TariffObjectAggregate>;
  abstract delete(tariffObjectId: number): Promise<boolean>;
}