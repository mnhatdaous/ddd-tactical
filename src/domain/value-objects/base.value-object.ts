interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  abstract isValid(): boolean;
  abstract isEqual(vo?: ValueObject<T>): boolean;
}
