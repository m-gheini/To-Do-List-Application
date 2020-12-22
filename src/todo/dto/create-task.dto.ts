export default class CreateTaskDto {
    readonly name: string;
    readonly itemIDs: number[];
    readonly categoryID: number;
    readonly tagIDs: number[];
  }