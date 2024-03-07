import { ControlGroup } from '@shared/ui/Control';
import { ComponentProps } from 'react';

interface IAnswerModelData {
  options: ComponentProps<typeof ControlGroup>['options'];
  multiple?: boolean;
}

export class Model {
  options;
  multiple;
  constructor({ options, multiple }: IAnswerModelData) {
    this.options = options;
    this.multiple = multiple;
  }
}
