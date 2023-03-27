import React from 'react';
import WidgetBuilder from '../../components/templates/WidgetBuilder';
import ExampleCounter from '../../widgets/ExampleCounter/ExampleCounter';

export default function Scene() {
  return (
    <>
      <WidgetBuilder align={'center'}>
        <ExampleCounter title={'Example Counter'} message={'This is an Example Widget'} />
      </WidgetBuilder>
    </>
  );
}
