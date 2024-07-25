import React from 'react';

function Profilebox({ profile }) {
  return (
    <div className="profile-box">
      <img src={profile.profilePic} alt={profile.name} className="profile-pic" />
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p className="subtitle">{profile.subtitle}</p>
      </div>
      <p>{profile.description}</p>
      <div className="connections">
        <img src={profile.connectionPic} alt="connections" className="connection-pic" />
        <span>{profile.connections} connections</span>
      </div>
      <hr />
      <button className="connect-btn">Connect</button>
    </div>
  );
}

export default Profilebox;