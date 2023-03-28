import Form from '../../organisms/Form/Form.interface';

export default interface FormControl extends Form.BaseControlProps {
  placeholder?: string;
  type?: string;
  as?: 'input' | 'textarea' | React.ElementType;
  htmlSize?: number;
  plaintext?: boolean;
  readOnly?: boolean;
  htmlFor?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  caption?: string;
  captionId?: string;
  hasValidation?: boolean;
  debounceTime?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  rows?: number;
  pattern?: RegExp;
  persist?: boolean;
}
