"use client";
import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
`;

export const FocusInput = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  color: #adadad;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all 0.4s;
    background: linear-gradient(to left, #21d4fd, #b721ff);
  }

  &::after {
    font-size: 15px;
    color: #999999;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0;
    padding-left: 5px;
    transition: all 0.4s;
  }
`;

export const Input = styled.input`
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  border: none;
  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px;

  &:focus {
    outline: 0;

    ~ ${FocusInput}::after {
      top: -15px;
    }

    ~ ${FocusInput}::before {
      width: 100%;
    }
  }

  &.hasValue {
    ~ ${FocusInput}::after {
      top: -15px;
    }

    ~ ${FocusInput}::before {
      width: 100%;
    }
  }
`;