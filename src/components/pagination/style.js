import styled from 'styled-components';

export const YYPaginationStyle = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .change-page-btn {
      width: 71px;
      height: 26px;
      color: #333;
      /* text-align: center; */
      line-height: 26px;
      border: 1px solid #ccc;
      cursor: pointer;
      border-radius: 2px;
    }
    .change-next {
      padding-right: 22px;
      text-align: right;
      background-position: -75px -560px;
      &:hover {
        background-position: -75px -590px;
      }
    }
    .change-next-unClick {
      text-align: right;
      padding-right: 22px;
      background-position: -75px -620px;
      cursor: default;
      color: #cacaca;
    }
    .change-pre {
      padding-left: 22px;
      background-position: 0 -560px;
      &:hover {
        background-position: 0 -590px;
      }
    }
    .change-pre-unClick {
      padding-left: 22px;
      color: #cacaca;
      background-position: 0 -620px;
      cursor: default;
    }
    .page-item {
      padding: 0 8px;
      border: 1px solid #ccc;
      line-height: 22px;
      height: 24px;
      border-radius: 2px;
      margin: 0 3px;
      cursor: pointer;
      &:hover {
        border: 1px solid #333;
      }
    }
    .active-page {
      background-position: 0 -650px;
      color: white;
      border-color: #a2161b;
    }
  }
`;