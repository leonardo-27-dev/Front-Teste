import styled from "styled-components";

const v = {
  borderRadius: "8px",
  mdSpacing: "16px",
  smSpacing: "8px",
  lgSpacing: "32px",
  sm: "37.5em",
  md: "48em",
  lg: "64em",
  boxShadow:"0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11)",
};

export const STable = styled.table`
    width: 50%;
    border-collapse: collapse;
    text-align: center;
    overflow: hidden;
    margin: 10vh auto;
`;

export const STHead = styled.thead`
    position: sticky;
    z-index: 100;
    border-collapse: collapse;
    text-align: center;
    overflow: hidden;
    border-color: white
`;

export const STHeadTR = styled.tr`
    background: white;
    color: black;
`;

export const STH = styled.th`
    font-weight: normal;
    padding: ${v.smSpacing};
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;

    :not(:last-of-type) {
        border-right: 1px solid ${({ theme }) => theme.bg2};
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
    background: ${({ theme }) => theme.white};
`;

export const STD = styled.td`
    padding: ${v.smSpacing};
    border: 1px solid ${({ theme }) => theme.bg2};
    font-size: 14px;
`;