// React Way
const heading1 = React.createElement(
  'h1',
  {
    id: 'title1',
  },
  'Namaste React'
);
const heading2 = React.createElement(
  'h1',
  {
    id: 'title2',
  },
  'Namaste React Again'
);
const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading1, heading2]
);
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

// JS Way
// const heading = document.createElement('h1');
// heading.innerHTML = 'Namaste React';
// const root = document.getElementById('root');
// root.appendChild(heading);
