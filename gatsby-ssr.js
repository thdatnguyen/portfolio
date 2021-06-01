import React from 'react';
import Layout from './src/components/Shared/Layout.component';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// export function wrapRootElement({ element }) {
//   return <OrderProvider>{element}</OrderProvider>;
// }
