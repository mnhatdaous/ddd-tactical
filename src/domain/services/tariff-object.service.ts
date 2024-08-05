import { TariffObjectEntity } from '@/domain/entities/tariff-object.entity';

export class TariffObjectService {
  async deleteTariffObject(tariffObjectEntity: TariffObjectEntity): Promise<boolean> {
    return true;
  }
}
