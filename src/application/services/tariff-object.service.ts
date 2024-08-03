import { TariffObjectRepository } from '@/domain/repositories/tariff-object.repository';
import { TariffObjectAggregate } from '@/domain/aggregates/tariff-object.aggregate';
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
    const tariffObjectAggregate = new TariffObjectAggregate(tariffObjectEntity);

    const newTariffObjectAggregate = await this.tariffObjectRepository.save(tariffObjectAggregate);
    const newTariffObject = newTariffObjectAggregate.TariffObject;

    const createTariffObjectResponse = new CreateTariffObjectResponse({
      ...newTariffObject,
      tariffType: newTariffObject.tariffType.value,
    });

    return createTariffObjectResponse;
  }

  async deleteTariffObject(request: DeleteTariffObjectRequest): Promise<DeleteTariffObjectResponse> {
    const success = await this.tariffObjectDomainService.deleteTariffObject(request.id);
    return { success: success };
  }
}
