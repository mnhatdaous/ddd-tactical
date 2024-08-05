import { TariffObjectEntity } from '@/domain/entities/tariff-object.entity';

export abstract class TariffObjectRepository {
  abstract find(id: number): Promise<TariffObjectEntity>;
  abstract save(tariffObjectEntity: TariffObjectEntity): Promise<TariffObjectEntity>;
  abstract delete(id: number): Promise<boolean>;
}