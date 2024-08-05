import { FormulaEntity } from '@/domain/entities/formula.entity';
import { TariffObjectEntity } from '@/domain/entities/tariff-object.entity';

export class AgreementAggregate {
  constructor(public formulaEntity: FormulaEntity) {}

  isFormulaUsingTariffObject(tariffObject: TariffObjectEntity): boolean {
    return this.formulaEntity.tariffObjects.some(
      (to) => to.id === tariffObject.id,
    );
  }
}
