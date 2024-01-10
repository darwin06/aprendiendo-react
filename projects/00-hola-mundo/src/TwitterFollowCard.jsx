import { React, useState } from "react";

function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const avatarName = `Avatar de ${children}`

  const imageSrc = `https://unavatar.io/${userName}`;

  const textBtn = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={avatarName}
          src={imageSrc}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw-followCard-text">
            {textBtn}
          </span>
          <span className="tw-followCard-stopFollow" >Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
