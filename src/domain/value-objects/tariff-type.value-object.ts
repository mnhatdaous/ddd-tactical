import { ValueObject } from './base.value-object';

interface TariffTypeProps {
  value: string;
}

export class TariffType extends ValueObject<TariffTypeProps> {
  static validTariffs: string[] = [
    'Manual',
    'Automation',
    'Charge (System Code)',
    'Tariff Rate',
  ];

  constructor(props: TariffTypeProps) {
    super(props);
    if (!this.isValid()) {
      throw new Error(`Invalid tariff type: ${props.value}`);
    }
  }

  get value(): string {
    return this.props.value;
  }

  isValid(): boolean {
    return TariffType.validTariffs.includes(this.props.value);
  }

  isEqual(valueObject?: ValueObject<TariffTypeProps>): boolean {
    if (valueObject === null || valueObject === undefined) {
      return false;
    }
    if (!(valueObject instanceof TariffType)) {
      return false;
    }
    return this.props.value === valueObject.props.value;
  }
}
