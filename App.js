/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello World Multiple tags!</h1>
 *      </div>
 * </div>
 * 
 * 
 */

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
const h1 = React.createElement("h1", {}, "I'm h1 tag");
const h2 = React.createElement("h2", {}, "I'm h2 tag");
const child = React.createElement("div", {id:"child1"}, [h1, h2]);
const parent = React.createElement("div", {id: "parent"}, [child,
    React.createElement("div", {id:"child2"}, [
        React.createElement("h3", {}, "I'm h3 tag"), 
        React.createElement("h4", {}, "I'm h4 tag")
    ])
]);


console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("myReactRoot"));
root.render(parent);
