import { ButtonVariant } from 'react-bootstrap/esm/types';
import { Props as FormProps } from './Form';
import TextControl from '../../molecules/TextControl';
import TextAreaControl from '../../molecules/TextAreaControl';
import PhoneControl from '../../molecules/PhoneControl';
import NumberControl from '../../molecules/NumberControl';
import EmailControl from '../../molecules/EmailControl';
import FormSubmit from '../../atoms/FormSubmit';
import FormReset from '../../atoms/FormReset';

declare namespace Form {
  export interface SubComponents {
    (props: FormProps): JSX.Element;
    Text: typeof TextControl;
    TextArea: typeof TextAreaControl;
    Phone: typeof PhoneControl;
    Number: typeof NumberControl;
    Email: typeof EmailControl;
    Submit: typeof FormSubmit;
    Reset: typeof FormReset;
  }
  export interface BaseControlProps {
    ref?: any;
    name: string;
    disabled?: boolean;
    id?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    label?: string | JSX.Element;
    readOnly?: boolean;
    tabIndex?: number;
    value?: string | any[] | number;
    className?: string;
    bsPrefix?: string;
    required?: boolean;
    onChange?: (e: any) => void;
    onInput?: (input: any) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onFocus?: React.FocusEventHandler<any>;
    onFocusCapture?: React.FocusEventHandler<any>;
    autoFocus?: boolean;
  }
  export interface BaseButtonProps {
    className?: string;
    active?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'lg';
    variant?: ButtonVariant;
    bsPrefix?: string;
    children?: JSX.Element | JSX.Element[];
    onClick?: (e: any) => void;
  }
}
export default Form;
