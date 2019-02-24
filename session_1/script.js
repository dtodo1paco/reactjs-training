const jsApp = document.getElementById("app-js");
const reactApp = document.getElementById("app-react");

const render = () => {
  jsApp.innerHTML = `
    <div class="test">
      Hello JS
      <div></div>
      <p>${new Date()}</p>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div", 
      { className: "test" },
      "Hello React ", 
      React.createElement("div"), 
      React.createElement(
        "p", 
        null, 
        new Date().toString()
      )
    ),
    reactApp
  );
};

setInterval(render, 1000);
