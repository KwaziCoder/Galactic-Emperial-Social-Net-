import React from 'react';
import {content} from './../theme/images'

const Profile = () => {
  return (
    <div className="content">
        <div>
          <img src={content}/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
  )
}

export default Profile;