import React from 'react';
import { render } from 'react-dom';

const MyTitle = function (props) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, props.title)
  );
};

const MyFirstComponent = function () {
  return React.createElement(
    'div',
    { id: 'container' },
    React.createElement(MyTitle, { title: 'Stranger Things' }),
    React.createElement(MyTitle, { title: 'Suits' }),
    React.createElement(MyTitle, { title: 'The 100' }),
    React.createElement(MyTitle, { title: 'Game of Thrones' })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('root')
);
