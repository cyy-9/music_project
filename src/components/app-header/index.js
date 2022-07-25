import React, { memo, useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight,
    SearchMenuDiv
} from './style';
import {headerLinks} from '../../common/local-data.js';
import request from '../../services/request';

function SearchMenu(props) {
    const {visible} = props;
    const handleClick = (e) => {
        console.log(e);
    }
    return (
        visible ? 
        <SearchMenuDiv onClick={(e) => handleClick(e)}>
            <div></div>
        </SearchMenuDiv> : null
    )
}

export default memo(function YYAppHeader() {
    const [isSearchMenuVisible, setIsSearchMenuVisible] = useState(false);
    const [inputKeywords, setInputKeywords] = useState('');
    const showSelectItem = (item, index) => {
        if(index < 3) {
            return (
                <NavLink to={item.link} className="aLink">{item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
                
            )
        } else {
            return (
                <a href={item.link} className="aLink" rel="noopener noreferrer" target="_blank">{item.title}</a>
            )
        }
    }
    const handleChangeKeyword = (e) => {
        if(e.target.value) {
            setIsSearchMenuVisible(true);
        } else {
            setIsSearchMenuVisible(false);
        }
        setInputKeywords(e.target.value);
        request({
            url: '/search/suggest',
            params: {
                keywords: inputKeywords,
            }
        }).then((res) => {

        })
    }
    const handlePressEnter = (e) => {
        // console.log(searchKeyword)
        request({
            url: '/search',
            params: {
                keywords: inputKeywords,
            }
        }).then((res) => {
            console.log(res);
        })
    }
    const handleInputFocus = () => {
        if(inputKeywords) setIsSearchMenuVisible(true);
    }
    const handleInputBlur = () => {
        setIsSearchMenuVisible(false);
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/discover/recommend" className="logo sprite_01"> </a>
                    <div className="select-list">
                    {
                        headerLinks.map((item, index) => {
                            return (
                                <div key={item.title} className="select-item">
                                {
                                    showSelectItem(item, index)
                                }
                                </div>
                            )
                        })
                    }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input
                        className="search" 
                        placeholder="音乐/视频/电台/用户" 
                        prefix={<SearchOutlined/>}
                        onChange={handleChangeKeyword}
                        onPressEnter={(e) => handlePressEnter(e)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <SearchMenu visible={isSearchMenuVisible}/>
                    <div className="center">创作者中心</div>
                    <div className="login-button">登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
