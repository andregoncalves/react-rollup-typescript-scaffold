import * as React from 'react';
import * as ReactDom from 'react-dom';
import Test from './test';

interface HelloProps {
    compiler: string;
    framework: string;
}

const Hello = (props: HelloProps) => (<div><Test /><h1>Hello from {props.compiler} and {props.framework}!</h1></div>);

ReactDom.render(
    <Hello compiler="typescript" framework="react" />,
    document.getElementById('app'),
);
