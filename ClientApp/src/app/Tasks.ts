export class Tasks {
  id: number;
  Title: string;
  ProjectNavigationId: number;

  constructor(title:string, pvid:number) {
    this.Title = title;
    this.ProjectNavigationId = pvid;
   

  }

}
