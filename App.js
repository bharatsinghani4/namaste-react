const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement("h1", { id: "heading" }, "Hello world from react h1!");
const heading2 = React.createElement("h2", { id: "heading2", }, "Hello world from react h2!");
const child1 = React.createElement("div", { id: "child", }, [heading1, heading2]);
const child2 = React.createElement("div", { id: "child2", }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent", }, [child1, child2]);

root.render(parent);
