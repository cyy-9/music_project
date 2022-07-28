import styled from 'styled-components';

export const UnLoginStyle = styled.div`
  position: absolute;
  width: 530px;
  height: 366px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background: white;
  .header {
    height: 40px;
    background: #2d2d2d;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .title {
      font-size: 16px;
      line-height: 40px;
      padding-left: 10px;
      color: #eee;
    }
    .close-icon {
      font-size: 16px;
      line-height: 40px;
      padding-right: 10px;
      color: #999;
      cursor: pointer;
      &:hover {
        color: #eee;
      }
    }
  }
  .body {
    padding: 40px 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .body-left {
      width: 125px;
      height: 220px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .body-right {
      width: 200px;
      height: 206px;
      .body-title {
        font-size: 18px;
        color: #333;
        text-align: center;
      }
      .qrcode {
        margin: 10px auto;
        /* border: 1px solid #ccc; */
        width: 180px;
        height: 180px;
        img {
          /* width: 100%;
          height: 100%; */
        }
      }
    }
  }
`;

export const AuthStyle = styled.div`
  .imgwrapper {
    width: 140px;
    height: 140px;
    margin: 40px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .authing {
    .p1 {
      margin-top: 2px;
      text-align: center;
      font-size: 18px;
      color: #333;
    }
    .p2 {
      margin-top: 10px;
      text-align: center;
      font-size: 16px;
      color: #666;
    }
  }
`;

export const LoginSuccessStyle = styled.div`

`;