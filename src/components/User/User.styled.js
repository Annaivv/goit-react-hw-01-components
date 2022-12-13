import styled from 'styled-components';

export const UserCard = styled.div`
  width: 240px;
  height: 320px;
  margin: 0 auto;
  margin-bottom: 0;
  border: 1px solid #e5e4e2;
  border-radius: 4px;
  text-align: center;
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  padding: 12px;
  border-radius: 50%;
`;

export const UserTitle = styled.h2`
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  margin-bottom: 6px;
  opacity: 0.7;
`;

export const UserLocation = styled.p`
  margin-bottom: 20px;
  opacity: 0.7;
`;

export const InfoList = styled.ul`
  display: flex;
  margin: 0;
  background-color: lightgray;
`;

export const InfoCell = styled.li`
  padding: 12px;
`;

export const InfoCategory = styled.p`
  padding-bottom: 6px;
  opacity: 0.7;
`;

export const InfoNumber = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
