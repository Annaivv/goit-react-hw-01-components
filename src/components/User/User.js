import PropTypes from 'prop-types';
import {
  UserCard,
  UserImage,
  UserTitle,
  UserTag,
  UserLocation,
  InfoList,
  InfoCell,
  InfoCategory,
  InfoNumber,
} from './User.styled';

export const User = ({ user: { avatar, username, tag, location, stats } }) => {
  return (
    <UserCard>
      <UserImage src={avatar} alt="User avatar" />
      <UserTitle>{username}</UserTitle>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
      <InfoList>
        <InfoCell>
          <InfoCategory>Followers </InfoCategory>
          <InfoNumber>{stats.followers}</InfoNumber>
        </InfoCell>
        <InfoCell>
          <InfoCategory>Views </InfoCategory>
          <InfoNumber>{stats.views}</InfoNumber>
        </InfoCell>
        <InfoCell>
          <InfoCategory>Likes </InfoCategory>
          <InfoNumber>{stats.likes}</InfoNumber>
        </InfoCell>
      </InfoList>
    </UserCard>
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
