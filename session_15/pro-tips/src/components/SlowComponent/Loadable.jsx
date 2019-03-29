import React from 'react';
import Loadable from 'react-loadable';
//import Loading from '../Loading';

function MyLoadingComponent() {
  return <div>Loading...</div>;
}

const LoadableAnotherComponent = Loadable({
  loader: () => import('./index'),
  loading: MyLoadingComponent,
});

export default LoadableAnotherComponent;