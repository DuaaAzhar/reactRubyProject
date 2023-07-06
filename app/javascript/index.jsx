// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import { CardanoWallet } from '@meshsdk/react'
import App from './components/App';
import { MeshProvider } from '@meshsdk/react';

// const MeshProvider = import('@meshsdk/react').then(module => module.MeshProvider);
// const plutusScript = import('@meshsdk/core').then(module =>module.PlutusScript);
// const resolvePlutusScriptAddress = import('@meshsdk/core').then(module => {
//   module.resolvePlutusScriptAddress()
//   console.log("sdssddssddsdsdsds-----  ",module)
// });



// const script = {
//   code: '4e4d01000033222220051200120011',
//   version: 'V1',
// };
// const scriptAddress = resolvePlutusScriptAddress(script, 0);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MeshProvider>
      <App />,
   </MeshProvider>,
    
    document.body.appendChild(document.createElement('div')),
  )
})
