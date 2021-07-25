// To parse this data:
//
//   import { Convert } from "./file";
//
//   const notesModel = Convert.toNotesModel(json);

export interface NotesModel {
    title: string;
    body:  string;
     date:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toNotesModel(json: string): NotesModel[] {
        return JSON.parse(json);
    }

    public static notesModelToJson(value: NotesModel[]): string {
        return JSON.stringify(value);
    }
}
