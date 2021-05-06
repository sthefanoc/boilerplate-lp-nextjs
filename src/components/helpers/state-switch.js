/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

function stateSwitch() {
  return (
    <>
      <input type='checkbox' id='switch' />
      <label for='switch'>Toggle</label>
    </>
  );
}

export default stateSwitch;
