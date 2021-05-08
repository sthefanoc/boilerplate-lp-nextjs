/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';

function stateSwitch() {
  const [videoWatched, setVideoWatched] = useState(false);

  const videoWatchedCompletely = () => {
    let sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id == 'banner-video' || sections[i].id == 'home') {
        console.log('eeeeeeeeeee');
      } else {
        console.log('hiding', sections[i]);
        sections[i] ? sections[i].classList.toggle('hidden') : '';
      }
    }
  };

  useEffect(() => {
    videoWatchedCompletely();
  }, [videoWatched]);

  const getStateCheckBox = () => {
    const checkbox = document.querySelector('#switch');

    if (checkbox.checked) {
      setVideoWatched(false);
    } else {
      setVideoWatched(true);
    }
    console.log('checkbox', checkbox.checked);
    console.log('video watched', videoWatched);
  };

  return (
    <div className='stateSwitch'>
      <p>Vídeo assistido?</p>
      <input onClick={getStateCheckBox} type='checkbox' id='switch' />
      <label for='switch'>Toggle</label>
    </div>
  );
}

export default stateSwitch;
