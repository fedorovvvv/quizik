import { ChangeEvent, memo, useEffect, useId, useState } from 'react';
import Control from './Control';

interface IOption {
  value: string | number;
  label?: string;
}

type Props<TMultiple extends boolean = false> = {
  onChange?: (value: Props<TMultiple>['value']) => void;
  value?: TMultiple extends true ? IOption['value'][] : IOption['value'];
  options: IOption[];
  multiple?: TMultiple;
};

export default memo(function Group<TMultiple extends boolean = false>({
  options,
  onChange,
  value,
  multiple
}: Props<TMultiple>) {
  //@ts-ignore
  const [groupValue, setGroupValue] = useState<typeof value>(multiple ? value ?? [] : value);
  const controlsName = useId();

  const addValue = (optionValue: (typeof options)[0]['value']) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setGroupValue((value) => {
      if (Array.isArray(value) && multiple) {
        return Array.from(new Set([...value, optionValue]));
      } else if (!multiple) {
        return optionValue;
      }
    });
  };

  const removeValue = (optionValue: (typeof options)[0]['value']) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setGroupValue((value) => {
      if (!multiple) return optionValue;
      if (Array.isArray(value) && multiple) {
        return value.filter((v) => v !== optionValue);
      }
      return value;
    });
  };

  const handleControlChange = (e: ChangeEvent<HTMLInputElement>, option: (typeof options)[0]) => {
    if (e.currentTarget.checked) {
      addValue(option.value);
    } else {
      removeValue(option.value);
    }
  };

  useEffect(() => {
    onChange?.(groupValue);
  }, [groupValue, onChange]);

  return (
    <>
      {options.map((option) => (
        <Control
          key={option.value}
          name={controlsName}
          value={option.toString()}
          type={multiple ? 'checkbox' : 'radio'}
          checked={
            Array.isArray(groupValue)
              ? groupValue.includes(option.value)
              : groupValue === option.value
          }
          onChange={(e) => handleControlChange(e, option)}>
          {option.label ?? option.value}
        </Control>
      ))}
    </>
  );
});
