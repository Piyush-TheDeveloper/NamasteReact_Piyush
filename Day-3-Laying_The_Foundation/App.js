import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './index.css';

/* Nested header element with h1,h2,h3 using React.createElement() */ 
const heading_1 = React.createElement("h1", {id: "heading"}, "Namaste React Live");
const heading_2 = React.createElement("h2", {id: "main_heading"}, "Chapter 03 : Laying the foundation");
const heading_3 = React.createElement("h3", {id: "sub_heading"}, "Nested header element with h1,h2,h3 using React.createElement()");

const header = React.createElement("div", {className : "title"}, [heading_1, heading_2, heading_3]);

/* Nested header element with h1,h2,h3 using JSX */ 
const jsx_header= (
  <div className="title">
    <h1>Namaste React Live</h1>
    <h2>Chapter 03 : Laying the foundation</h2>
    <h3>Nested header element with h1,h2,h3 using JSX</h3>
  </div>
);

/* Nested header element with h1,h2,h3 using JSX React Element and pass attributes */ 
const jsx_header_attr= (
  <div className="title_jsx">
    <h1 id="heading1" titlename="namaste">Namaste React Live</h1>
    <h2 id="heading2">Chapter 03 : Laying the foundation</h2>
    <h3 id="heading3">Nested header element with h1,h2,h3 using JSX and pass attributes</h3>
  </div>
);

/* Nested header element with h1,h2,h3 using Functional Component */ 
const TitleComponent = function() {
  return (
    <div className="title_comp">
      <h1>Namaste React Live</h1>
      <h2>Chapter 03 : Laying the foundation</h2>
      <h3>Nested header element with h1, h2, h3 using Functional Component - TitleComponent</h3>
    </div>
  );
}

/* Component Composition */
const NestedComponent = function () {
  return (
    <div>
      <Header />
      {header}
      {jsx_header}
      {jsx_header_attr}
      { TitleComponent }{/* It does not work and warning is thrown in console since TitleComponent is a component and not a react element*/}
      { <TitleComponent /> } {/* It works since TitleComponent is enclosed within <> */}
      { <TitleComponent> </TitleComponent> } {/* It works since TitleComponent is enclosed within <> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NestedComponent />);
