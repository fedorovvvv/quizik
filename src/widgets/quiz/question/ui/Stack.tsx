import { CardStack } from '@shared/ui/Card';
import { PropsWithChildren, memo } from 'react';

type Props = PropsWithChildren;

export default memo(function Stack({ children }: Props) {
    return <CardStack levels={2}>{children}</CardStack>;
});
