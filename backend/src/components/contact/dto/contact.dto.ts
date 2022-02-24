export class CreateContactDTO {
  readonly name: string;
  readonly email: string;
  profilePicture: string;
  readonly isFavorite: boolean;
  readonly numbers: CreateContactPhoneNumberDTO[];
}

export class CreateContactPhoneNumberDTO {
  readonly type: string;
  readonly number: string;
}
