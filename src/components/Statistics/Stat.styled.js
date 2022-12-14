import styled, { css } from 'styled-components';

export const StatContainer = styled.div`
  width: 400px;
  height: 252px;
  margin: 50px auto;
  padding: 60px;
  background-color: #e5e4e2;
  text-align: center;
`;

export const StatTitle = styled.h2`
  height: 50%;
  padding-top: 20px;
  background-color: #fff;
  text-transform: uppercase;
`;

export const DataList = styled.ul`
  width: 100%;
  display: flex;
  background-color: #fff;
`;

export const DataLi = styled.li`
  width: 20%;
`;

export const DataItem = styled.div`
  padding: 10px;
  color: #fff;
  ${props =>
    props.name === 'id-1' &&
    css`
      background: #0cb6f6;
    `};

  ${props =>
    props.name === 'id-2' &&
    css`
      background: #9f7ecf;
    `};

  ${props =>
    props.name === 'id-3' &&
    css`
      background: #e5537c;
    `};

  ${props =>
    props.name === 'id-4' &&
    css`
      background: #70f0f3;
    `};

  ${props =>
    props.name === 'id-5' &&
    css`
      background: #f38370;
    `};
`;
