import { CommandOptionType } from '@app/enums/CommandOptionType';
import { ICommandChoice } from '@app/interfaces/ICommandChoice';

export interface ICommand {
  name: string;
  description?: string;
  required?: boolean;
  value?: string;
  type?: CommandOptionType;
  options?: ICommand[];
  choices?: ICommandChoice[];
}
