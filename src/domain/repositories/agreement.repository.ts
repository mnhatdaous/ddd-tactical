import { FormulaEntity } from '@/domain/entities/formula.entity';

export abstract class AgreementRepository {
  abstract findFormulaByTariffObjectId(
    tariffObjectId: number,
  ): Promise<FormulaEntity>;
}
