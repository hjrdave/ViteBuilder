import Form from "../../organisms/Form/Form.interface";

export default interface CheckProps extends Form.BaseControlProps {
    feedback?: React.ReactNode;
    feedbackToolTip?: boolean;
    inline?: boolean;
    reverse?: boolean;
    title?: string;
    type?: 'radio' | 'checkbox' | 'switch';
    bsSwitchPrefix?: string;
    size?: number;
}