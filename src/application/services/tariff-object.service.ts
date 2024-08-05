import { TariffObjectRepository } from '@/domain/repositories/tariff-object.repository';
import { TariffObjectEntity } from '@/domain/entities/tariff-object.entity';
import { TariffObjectService as TariffObjectDomainService } from '@/domain/services/tariff-object.service';
import { CreateTariffObjectRequest, CreateTariffObjectResponse } from '@/application/dtos/create-tariff-object.dto';
import { DeleteTariffObjectRequest, DeleteTariffObjectResponse } from '@/application/dtos/delete-tariff-object.dto';


export class TariffObjectService {
  constructor(
    private tariffObjectRepository: TariffObjectRepository,
    private tariffObjectDomainService: TariffObjectDomainService,
  ) { }

  async createTariffObject(request: CreateTariffObjectRequest): Promise<CreateTariffObjectResponse> {
    const tariffObjectEntity = new TariffObjectEntity(request);

    const newTariffObjectEntity = await this.tariffObjectRepository.save(tariffObjectEntity);

    const createTariffObjectResponse = new CreateTariffObjectResponse({
      ...newTariffObjectEntity,
      tariffType: newTariffObjectEntity.tariffType.value,
    });

    return createTariffObjectResponse;
  }

  async deleteTariffObject(request: DeleteTariffObjectRequest): Promise<DeleteTariffObjectResponse> {
    const tariffObjectEntity = await this.tariffObjectRepository.find(request.id);
    const isInUse = tariffObjectAggregate.isInUse();

    if (isInUse) {
      throw new Error('Tariff is in use and cannot be deleted.');
    }

    const success = await this.tariffObjectDomainService.deleteTariffObject(tariffObjectEntity);
    if(success) {
      await this.tariffObjectRepository.delete(tariffObjectEntity.id);
    }
    
    return { success: success };
  }
}
