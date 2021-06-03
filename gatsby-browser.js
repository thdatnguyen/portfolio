import React from 'react';
import Layout from './src/components/Shared/Layout.component';
require('typeface-work-sans');
require('typeface-overpass');
// import { GlobalStyles } from 'twin.macro'; // new
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// export function wrapRootElement({ element }) {
//   return <OrderProvider>{element}</OrderProvider>;
// }
