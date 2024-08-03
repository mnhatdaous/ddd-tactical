export class CreateTariffObjectRequest {
    name: string;
    abbreviation: string;
    dataSource: string;
    description: string;
    objectValueLocation: string;
    tariffType: string;
}

export class CreateTariffObjectResponse {
    id: number;
    name: string;
    abbreviation: string;
    dataSource: string;
    description: string;
    objectValueLocation: string;
    tariffType: string;

    constructor({
        id,
        name,
        abbreviation,
        dataSource,
        description,
        objectValueLocation,
        tariffType
      }: {
        id: number;
        name: string;
        abbreviation: string;
        dataSource: string;
        description: string;
        objectValueLocation: string;
        tariffType: string;
      }) {
        this.id = id;
        this.name = name;
        this.abbreviation = abbreviation;
        this.dataSource = dataSource;
        this.description = description;
        this.objectValueLocation = objectValueLocation;
        this.tariffType = tariffType;
      }
}
