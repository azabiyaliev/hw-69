export interface IShow {
  id: string;
  title: string;
  status: boolean;
}

export interface IShowAPI {
  [id: string]: ITask;
}