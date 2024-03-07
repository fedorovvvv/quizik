import { ControlGroup } from '@shared/ui/Control';
import { ComponentProps, memo } from 'react';

interface Props extends ComponentProps<typeof ControlGroup> {}

export default memo(function Answers(props: Props) {
  return <ControlGroup {...props} />;
});
