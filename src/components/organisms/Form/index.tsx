import React from 'react';
import { default as FormInterface } from './Form.interface';
import { default as FormComp } from './Form';
import TextControl from '../../molecules/TextControl';
import TextAreaControl from '../../molecules/TextAreaControl';
import PhoneControl from '../../molecules/PhoneControl';
import NumberControl from '../../molecules/NumberControl';
import EmailControl from '../../molecules/EmailControl';
import FormReset from '../../atoms/FormReset';
import FormSubmit from '../../atoms/FormSubmit';

const Form: FormInterface.SubComponents = (props) => <FormComp {...props} />;
Form.Text = TextControl;
Form.TextArea = TextAreaControl;
Form.Phone = PhoneControl;
Form.Number = NumberControl;
Form.Email = EmailControl;
Form.Reset = FormReset;
Form.Submit = FormSubmit;

export default Form;
