import styled from 'styled-components';

export const AllFriends = styled.ul`
  margin: 20px auto;
  max-width: 300px;
  text-align: center;
`;

export const FriendItem = styled.div`
  margin: 4px;
  padding: 10px 20px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const OnlineStatus = styled.span`
  width: 16px;
  height: 16px;
  margin: 16px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const FriendName = styled.p`
  margin-left: 16px;
  padding: 10px 0;
  font-size: 28px;
`;
