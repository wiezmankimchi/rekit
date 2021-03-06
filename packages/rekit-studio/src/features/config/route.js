// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  WebpackManager,
  DepsManager,
} from './';

export default {
  path: 'config',
  name: 'Config',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'webpack', name: 'Webpack manager', component: WebpackManager },
    { path: 'deps', name: 'Deps manager', component: DepsManager },
  ],
};
