import { Card } from '@shared/ui/Card';
import { PropsWithChildren, useMemo } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
    levels?: number;
}>;

const StackCard = styled(Card)<{ $level?: number }>`
    width: calc(100% - ${(props) => 20 * (props.$level ?? 1)}px);
    bottom: -${(props) => 10 * (props.$level ?? 1)}px;
`;
const StackCardWrapper = styled.div`
    height: 100%;
    pointer-events: none;
    ${StackCard} {
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const StackStyledComponent = styled.div`
    position: relative;
    isolation: isolate;
    ${StackCardWrapper} {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    }
`;

export default function Stack({ children, levels = 2 }: Props) {
    const items = useMemo(
        () =>
            Array(levels)
                .fill(null)
                .map((_, i, arr) => arr.length - i),
        [levels]
    );
    return (
        <StackStyledComponent>
            <StackCardWrapper>
                {items.map((item) => (
                    <StackCard $level={item} $opacity={1 - 0.3 * item} key={item}></StackCard>
                ))}
            </StackCardWrapper>
            <div>{children}</div>
        </StackStyledComponent>
    );
}
