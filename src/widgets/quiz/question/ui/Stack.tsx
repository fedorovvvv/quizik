import { CardStack } from '@shared/ui/Card';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function Stack({ children }: Props) {
    return <CardStack levels={2}>{children}</CardStack>;
}
