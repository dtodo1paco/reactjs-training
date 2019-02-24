'use strict'
const reactApp = document.getElementById("app-react");
const jsApp = document.getElementById("app-js");

class DateElement extends React.Component {
  render() {
	const dateString = new Date().toString();
    return (
		<div className="test">
            Hello React
      		<div></div>
			<p>{dateString}</p>
		</div>
	);
  }
}

const render = () => {
  jsApp.innerHTML = `
    <div class="test">
      Hello JS
      <div></div>
      <p>${new Date()}</p>
    </div>
  `;
  ReactDOM.render(<DateElement />, reactApp);
};

setInterval(render, 1000);

