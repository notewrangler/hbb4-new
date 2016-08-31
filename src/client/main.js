import React from 'react';
import { render } from 'react-dom';
import Routes from './routes'
// import { Router, Route, browserHistory } from 'react-router';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// // Layout
// import ExampleLayout from 'layout/example';

// // UI
// import ExampleComponent from 'ui/example';

// const Site = (
//   <MuiThemeProvider>
//     <Router history={browserHistory}>
//       <Route component={ExampleLayout}>
//         <Route path="/" component={ExampleComponent} />
//         <Route path="/example" component={ExampleComponent} />
//       </Route>
//     </Router>
//   </MuiThemeProvider>
// );

const root = document.getElementById('app')

render(<Routes />, root)

// render(Site, document.getElementById('app'));
