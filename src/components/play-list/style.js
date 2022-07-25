import styled from 'styled-components';

export const PlayListWrapper = styled.div`
    width: 986px;
    height: 301px;
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translate(-50%);
    .header {
        height: 40px;
        width: 100%;
        position: relative;
        .list-title {
            line-height: 40px;
            margin-left: 25px;
            color: #ccc;
            font-size: 16px;
            font-weight: bold;
        }
        .favor {
            position: absolute;
            top: 12px;
            left: 398px;
            line-height: 15px;
            color: #ccc;
            font-size: 14px;
        }
        .clear {
            position: absolute;
            top: 12px;
            left: 490px;
            line-height: 15px;
            font-size: 14px;
            color: #ccc;
        }
        .song-name {
            position: absolute;
            top: 0;
            left: 595px;
            width: 346px;
            height: 40px;
            color: #fff;
            text-align: center;
            font-size: 16px;
            line-height: 40px;
        }
        .close {
            position: absolute;
            top: 6px;
            right: 10px;
            width: 30px;
            height: 30px;
            color: #ccc;
            text-align: center;
            line-height: 30px;
            font-size: 16px;
            cursor: pointer;
        }
    }
    .content {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 40px;
        width: 976px;
        height: 260px;
        .left {
            position: absolute;
            top: 0;
            left: -3px;
            width: 553px;
            height: 260px;
            overflow-y: auto;
            background: black;
            .song-list {
                width: 100%;
                height: 100%;
                .song-item {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    color: #ccc;
                    &:hover {
                        color: #fff;
                    }
                    .play-icon {
                        position: absolute;
                        left: 20px;
                        line-height: 40px;
                        font-size: 16px;
                        height: 40px;
                        text-align: center;
                    }
                    .name {
                        width: 256px;
                        line-height: 40px;
                        float: left;
                        font-size: 16px;
                        padding-left: 50px;
                        cursor: pointer;
                    }
                    .tools {
                        float: left;
                        width: 88px;
                        height: 40px;
                        padding-left: 10px;
                        line-height: 40px;
                        font-size: 16px;
                    }
                    .artist {
                        float: left;
                        width: 140px;
                        height: 40px;
                        padding-left: 10px;
                        line-height: 40px;
                        text-align: center;
                    }
                    .time {
                        float: left;
                        width: 35px;
                        padding-left: 20px;
                        line-height: 40px;
                    }
                }
                .empty-tips {
                    padding-top: 85px;
                    font-size: 16px;
                    color: #aaa;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    .empty-icon {
                        font-size: 22px;
                        vertical-align: middle;
                        padding-right: 5px;
                    }
                }
            }
            &::-webkit-scrollbar {
                width: 8px;
            }
            &::-webkit-scrollbar-track {
                background-color: #868686;
                -webkit-border-radius: 2em;
                -moz-border-radius: 2em;
                border-radius:2em;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #333;
                -webkit-border-radius: 2em;
                -moz-border-radius: 2em;
                border-radius:2em;
            }
        }
        .right {
            overflow-y: auto;
            position: absolute;
            top: 0;
            right: -3px;
            width: 420px;
            height: 260px;
            background: black;
            &::-webkit-scrollbar {
                width: 8px;
            }
            &::-webkit-scrollbar-track {
                background-color: #868686;
                -webkit-border-radius: 2em;
                -moz-border-radius: 2em;
                border-radius:2em;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #333;
                -webkit-border-radius: 2em;
                -moz-border-radius: 2em;
                border-radius:2em;
            }
            .lyric-list {
                position: absolute;
                top:0;
                right: 40px;
                width: 354px;
                margin: 20px 0;
                .lyric {
                    color: #989898;
                    text-align: center;
                    font-size: 14px;
                    height: 32px;
                    line-height: 32px;
                }
                .active {
                    color: white;
                    font-size: 16px;
                    text-align: center;
                    transition: color 0.8s linear;
                }
            }
        }
    }
`;