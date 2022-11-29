export const Friend = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <div>
      {/* <span>{isOnline} </span> */}
      <img src={avatar} alt="User avatar" />
      <span>{name} </span>
    </div>
  );
};
