/**
 * This index is used as an entry point into library bundle
 * based on https://ohsnail.com/building-a-react-app-as-a-widget-using-webpack/
 */
import React from 'react';
import { default as WidgetComp } from './ExampleCounter2';
import Widget, { IWidget } from '../Widget';

type Props = {} | IWidget.Props;
export const init = (init: IWidget.Init<Props>) =>
  new Widget<Props>({
    selector: init.selector,
    component: WidgetComp,
    props: init.props,
  });
