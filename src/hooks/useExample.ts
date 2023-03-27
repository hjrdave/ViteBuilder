const useExample = () => {
  const showAlert = () => {
    console.log('foo');
    window.alert('This is an example.');
  };
  return showAlert;
};
export default useExample;
