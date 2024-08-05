import { TariffObjectRepository } from '@/domain/repositories/tariff-object.repository';
import { AgreementRepository } from '@/domain/repositories/agreement.repository';
import { AgreementAggregate } from '@/domain/aggregates/agreement.aggregate';
import { TariffObjectEntity } from '@/domain/entities/tariff-object.entity';
import {
  CreateTariffObjectRequest,
  CreateTariffObjectResponse,
} from '@/application/dtos/create-tariff-object.dto';
import {
  DeleteTariffObjectRequest,
  DeleteTariffObjectResponse,
} from '@/application/dtos/delete-tariff-object.dto';

export class TariffObjectService {
  constructor(
    private tariffObjectRepository: TariffObjectRepository,
    private agreementRepository: AgreementRepository,
  ) {}

  async createTariffObject(
    request: CreateTariffObjectRequest,
  ): Promise<CreateTariffObjectResponse> {
    const tariffObjectEntity = new TariffObjectEntity(request);

    const newTariffObjectEntity =
      await this.tariffObjectRepository.save(tariffObjectEntity);

    const createTariffObjectResponse = new CreateTariffObjectResponse({
      ...newTariffObjectEntity,
      tariffType: newTariffObjectEntity.tariffType.value,
    });

    return createTariffObjectResponse;
  }

  async deleteTariffObject({
    id,
  }: DeleteTariffObjectRequest): Promise<DeleteTariffObjectResponse> {
    const formulaEntity =
      await this.agreementRepository.findFormulaByTariffObjectId(id);

    const agreementAggregate = new AgreementAggregate(formulaEntity);

    const tariffObjectEntity = await this.tariffObjectRepository.find(id);

    if (agreementAggregate.isFormulaUsingTariffObject(tariffObjectEntity)) {
      throw new Error('Tariff is in use and cannot be deleted.');
    }

    const success = await this.tariffObjectRepository.delete(
      tariffObjectEntity.id,
    );

    return { success };
  }
}
