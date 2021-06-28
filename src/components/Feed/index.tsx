import React from 'react';
import StoryReel from '../Story';

import './Feed.scss';

function Feed(): React.ReactElement {
  return (
    <div className='feed'>
      <StoryReel />
      {/* Post generator */}
    </div>
  );
}

export default Feed;
