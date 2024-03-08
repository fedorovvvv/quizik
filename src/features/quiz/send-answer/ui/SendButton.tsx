import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;
export default function SendButton({ children }: Props) {
  return <div>{children}</div>;
}
