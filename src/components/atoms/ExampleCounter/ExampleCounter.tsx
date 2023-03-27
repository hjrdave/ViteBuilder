import React from 'react';
import styles from './ExampleCounter.module.scss';
import { Button } from 'react-bootstrap';
import useExample from '../../../hooks/useExample';

interface Props {
  title?: string;
  message?: string;
}
export default function ExampleCounter({ message, title }: Props) {
  const showAlert = useExample();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <div className={`p-3 d-flex flex-column align-items-center`}>
        <h4>{title}</h4>
        <p>
          <strong>Message:</strong> {message}
        </p>
        <p className={styles.count}>{count}</p>
        <Button variant={'primary'} onClick={showAlert}>
          This is a test button
        </Button>
      </div>
    </>
  );
}
