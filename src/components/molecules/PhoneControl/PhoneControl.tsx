import React from 'react';
import FormControl, { FormControlProps } from '../../atoms/FormControl';
import useControlledInput from '../../../hooks/useControlledInput';
import { useNonInitialEffect } from 'react-cork';

interface Props extends FormControlProps {
  value?: string;
}

export default function PhoneControl({
  value,
  name,
  onChange,
  placeholder,
  debounceTime,
  persist,
  ...props
}: Props) {
  const controlId = 'Phone';
  const _name = name;
  const { controlValue, setControlValue, bind } = useControlledInput({
    name: name,
    inputValue: value,
    onChange: onChange,
    debounceTime: debounceTime,
  });

  useNonInitialEffect(() => {
    setControlValue(controlValue);
  }, [controlValue]);

  return (
    <>
      <FormControl {...props} {...bind} name={_name} placeholder={placeholder ?? '___-___-____'} />
    </>
  );
}
