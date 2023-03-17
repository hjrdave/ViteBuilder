interface IWidgetBuilder{
    loading?: boolean;
    BrokenComp?: () => (JSX.Element);
}
export default IWidgetBuilder