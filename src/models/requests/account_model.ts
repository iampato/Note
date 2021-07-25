// To parse this data:
//
//   import { Convert, AccountModel } from "./file";
//
//   const accountModel = Convert.toAccountModel(json);

export interface AccountModel {
    email_address: string;
    password:      string;

}

// Converts JSON strings to/from your types
export class Convert {
    public static toAccountModel(json: string): AccountModel {
        return JSON.parse(json);
    }

    public static accountModelToJson(value: AccountModel): string {
        return JSON.stringify(value);
    }
}
