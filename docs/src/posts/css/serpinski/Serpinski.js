import React from 'react'

const Recurse3 = ({ depth, id }) => (
  <div id={id}>
    {depth > 0 && (
      <>
        <Recurse3 depth={depth - 1} />
        <Recurse3 depth={depth - 1} />
        <Recurse3 depth={depth - 1} />
      </>
    )}
  </div>
)

export default Recurse3
