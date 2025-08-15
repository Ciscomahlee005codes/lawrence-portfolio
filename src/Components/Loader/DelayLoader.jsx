import React from 'react'

const DelayLoader = (importFunc, delay = 3500) => {
  return React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise(resolve => setTimeout(resolve, delay))
    ]).then(([moduleExports]) => moduleExports)
  );
}

export default DelayLoader