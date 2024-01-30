import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

type state = 'awaits';

export interface TodoModel extends Base {}
export class TodoModel extends TimeStamps {
  @prop({ unique: true })
  title: string;

  @prop()
  description: string;

  @prop()
  state: state;
}
