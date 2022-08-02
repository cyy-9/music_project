import styled from 'styled-components';

export const HomeAcInfoStyle = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 185px;
  padding-top: 20px;
  background: #f6f6f6;
  border-bottom: 1px solid #d3d3d3;
  .user-info {
    display: flex;
    flex-flow: row nowrap;
    .img-wrap {
      box-sizing: border-box;
      width: 86px;
      height: 86px;
      margin-left: 20px;
      border: 1px solid #ccc;
      padding: 2px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .info-detail {
      margin-left: 18px;
      padding-top: 3px;
      .user-nickname {
        line-height: 14px;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        cursor: pointer;
      }
      .user-level {
        width: 40px;
        margin-top: 5px;
        font-style: italic;
        color: #999;
        font-size: 12px;
        font-weight: bold;
        border: 1px solid #999;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
      }
      .sign-in {
        color: white;
        font-size: 14px;
        background: #3366ff;
        width: 100px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        margin-top: 15px;
        cursor: pointer;
        &:hover {
          background: #3399ff;
        }
      }
    }
  }
  .user-follows {
    height: 40px;
    margin: 22px 25px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    cursor: pointer;
    .follows-item {
      font-size: 12px;
      color: #666;
      .count-item {
        font-size: 20px;
      }
    }
  }
`;