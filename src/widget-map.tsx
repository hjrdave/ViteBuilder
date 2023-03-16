import React from 'react';
import ExampleCounterScene from "./scenes/ExampleCounter";

export interface IWidgetMap{
    name: string;
    route: string;
    scene: () => React.ReactNode;
}
const widgetMap = [
    {
        name: "ExampleCounter",
        route: "example-counter",
        scene: ExampleCounterScene
    }
];
export default widgetMap;