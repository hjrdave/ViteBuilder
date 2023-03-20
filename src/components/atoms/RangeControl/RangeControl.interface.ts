export default interface RangeControl{
    name: string;
    id?: string;
    label?: string;
    onChange?: (e: any) => void;
    value?: string | number | any[];
    bsPrefix?: string;
    className?: string;
    labelClassName?: string;
    disabled?: boolean;
}