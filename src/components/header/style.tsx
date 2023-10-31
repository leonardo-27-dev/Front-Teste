"use client";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: #fff;
`;
export const NavHeader = styled.div`
  padding: 25px 20px;
  width: 100%;
  display: flex;
  align-items: baseline;
  margin: 0;
`;
export const NavLeft = styled.div`
  width: 33.333%;
  text-align: right;
  gap: 30px;
  display: inline-flex;
  justify-content: flex-start;
  margin-left: 12px;
`;
export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
export const NavRight = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`;
export const MenuLink = styled.a`
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
`;
