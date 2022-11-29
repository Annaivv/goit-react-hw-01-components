import PropTypes from 'prop-types';

export const User = ({ user: { avatar, username, tag, location, stats } }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <h2>{username}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        <li>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
