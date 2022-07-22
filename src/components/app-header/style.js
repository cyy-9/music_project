import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 75px;
    color: white;
    background-color: #242424;
    .content {
        height: 70px;

        display: flex;
        justify-content: space-between;
        
    }
    .divider {
        height: 5px;
        background-color: #c20c0c;
    }
`;
export const HeaderLeft = styled.div`
    display: flex;
    flex-flow: row nowrap;
    .logo {
        display: inline-block;
        width: 176px;
        height: 70px;
        background-position:  0 0;
    }
    .select-list {
        display: flex;
        flex-flow: row nowrap;
        line-height: 70px;
        .select-item {
            position: relative;
            display: inline-block;
            padding: 0 19px;
            .aLink {
                color: #cccccc;
                font-size: 14px;
                text-decoration: none;
                &.active {
                    color: white;
                }
                &.active .icon {
                    position: absolute;
                    display: inline-block;
                    width: 12px;
                    height: 7px;
                    bottom: -1px;
                    left: 50%;
                    transform: translate(-50%, 0);
                    background-position: -226px 0;
                }
            }
        }
        .select-item:hover {
            background: black;
            color: white;
        }
        .select-item:last-child {
            ::after {
                position: absolute;
                content: "";
                width: 28px;
                height: 19px;
                background-image: url(${require("../../assets/img/sprite_01.png")});
                background-position: -190px 0;
                top: 20px;
                right: -15px;
            }
        }
    }
`;
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;
    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
            &::placeholder {
                font-size: 12px;
            }
        }
    }

    .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
    }
    .login-button {
        padding-right: 22px;
    }
`;