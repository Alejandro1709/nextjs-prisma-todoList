export default interface ITodo {
  id: number;
  body: string;
  completed?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
