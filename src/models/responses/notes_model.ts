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
export class ConvertNotesModel {
    // create an object
    public static object (title:string,date:string,body:string): NotesModel{
        let note:NotesModel = {
            title: title,
            date: date,
            body: body,
        };
        return note;
    }
    // single notesModel
    public static toNoteModel(json: string): NotesModel {
        return JSON.parse(json);
    }
    public static noteModelToJson(value: NotesModel): string {
        return JSON.stringify(value);
    }

    // a list
    public static toNotesModel(json: string): NotesModel[] {
        return JSON.parse(json);
    }

    public static notesModelToJson(value: NotesModel[]): string {
        return JSON.stringify(value);
    }
}
export default ConvertNotesModel;