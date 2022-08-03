import styled from 'styled-components';

export const SongsStyled = styled.div`
  width: 982px;
  padding: 40px;
  margin: 0 auto;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  /* box-sizing: content-box; */
  .songs-header {
    display: flex;
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 4px;
    margin-bottom: 10px;
    .songs-title {
      font-size: 24px;
      color: #333;
    }
    .songs-category {
      margin: 2px 0 0 12px;
      background-position: right -100px;
      width: 91px;
      height: 31px;
      cursor: pointer;
      span {
        display: inline-block;
        width: 86px;
        height: 31px;
        text-align: center;
        background-position: 0 -59px;
        padding: 0 10px 0 15px;
        line-height: 31px;
        color: #0c73c2;
      }
    }
  }

  .songs-content {
    display: flex;
    flex-flow: row wrap;
    /* justify-content: space-between; */
    .songs-item {
      padding: 0 0 0 50px;
      &:nth-child(5n + 1) {
        padding: 0;
      }
    }
  }
`;