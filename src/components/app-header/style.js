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
    .ant-modal-wrap .ant-modal .ant-modal-content .ant-modal-header {
        background: #242424;
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
    position: relative;
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
        cursor: pointer;
        &:hover {
            border-color: #ccc;
            color: #eee;
        }
    }
    .login-button {
        padding-right: 22px;
        cursor: pointer;
        &:hover {
            color: #eee;
        }
    }
    .login-success {
        /* position: relative; */
        padding-right: 22px;
        .avatar {
            width: 30px;
            height: 30px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
`;

export const SearchMenuDiv = styled.div`
    width: 240px;
    box-shadow: 10px;
    position: absolute;
    top: 60px;
    background: #eee;
    border-radius: 5px;
    z-index: 5;
    .search-menu-content {
        .search-users {
            height: 38px;
            line-height: 38px;
            color: #888;
            padding-left: 10px;
            cursor: pointer;
            border-bottom: 1px solid #ccc;
            &:hover {
                color: #666;
            }
        }
        .result-content {
            display: flex;
            flex-flow: row nowrap;
            .result-title {
                width: 80px;
                text-align: center;
                border-right: 1px solid #ccc;
                .title-item {
                    height: 24px;
                    line-height: 24px;
                    color: #444;
                    font-size: 12px;
                    font-weight: normal;
                }
                .title1 {
                    margin-top: 6px;
                }
                .title2 {
                    margin-top: ${(props) => ((props.songsCount - 1) * 24 + 12)}px;
                }
                .title3 {
                    margin-top: 12px;
                }
                .title4 {
                    margin-top: 36px;
                }
            }
            .result-list {
                width: 160px;
                .list-item {
                    box-sizing: content-box;
                    /* text-align: center; */
                    padding-left: 5px;
                    height: 24px;
                    line-height: 24px;
                    color: #444;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .padding-top {
                    padding-top: 6px;
                }
                .padding-bottom {
                    padding-bottom: 6px;
                }
                .border-style {
                    border-top: 1px solid #ccc;
                }
            }
        }
    }
`;

export const AvatarMenuStyle = styled.div`
    /* box-sizing: border-box; */
    width: 158px;
    position: fixed;
    top: 51px;
    right: 167px;
    z-index: 10;
    border-radius: 4px;
    cursor: pointer;
    .avatar-menu-item {
        background: #2b2b2b;
        color: #aaa;
        font-size: 12px;
        height: 26px;
        width: 100%;
        text-align: center;
        line-height: 26px;
        &:hover {
            color: #eee;
            background: #353535;
        }
    }
    .avatar-menu-first-item {
        background: transparent;
    }
`;