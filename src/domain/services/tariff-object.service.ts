import { TariffObjectRepository } from '@/domain/repositories/tariff-object.repository';

export class TariffObjectService {
  constructor(
    private tariffObjectRepository: TariffObjectRepository,
  ) { }

  async deleteTariffObject(id: number): Promise<boolean> {

    return true
  }
}
