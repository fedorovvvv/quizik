import { ChangeEventHandler, PropsWithChildren, memo, useId } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  value?: HTMLInputElement['value'];
  type?: 'checkbox' | 'radio';
  name?: string;
}>;

const ControlStyledComponent = styled.label`
  display: contents;
  span {
    display: block;
    padding: 10px;
    border-radius: 10px;
    font-weight: 500;
    border: 2px solid var(--color-txt-secondary);
    color: var(--color-txt-secondary);
    cursor: pointer;
    transition: 0.2s ease;
    transition-property: color, border, background;
  }
  input {
    display: none;
    &:checked ~ span {
      background-color: var(--color-txt-secondary);
      color: white;
    }
  }
`;

export default memo(function Control({ children, checked, onChange, value, type, name }: Props) {
  const id = useId();

  return (
    <ControlStyledComponent htmlFor={id}>
      <input
        id={id}
        type={type ?? 'checkbox'}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </ControlStyledComponent>
  );
});
