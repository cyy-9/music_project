import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';

import {SongsStyled} from './style';
import YYPagination from '../../../../components/pagination';
import {api} from '../../../../services/config';
import YYSongsItem from '../../../../components/songs-item';

export default memo(function YYSongs() {
    // 歌单列表
    const [list, setList] = useState([]);
    // 歌单总数量
    const [songsCount, setSongsCount] = useState(1);
    // 页数
    // const [page, setPages] = useState(1);
    useEffect(() => {
        axios({
            url: api + '/top/playlist',
            params: {
                limit: 35,
                // offset: (page - 1) * 35,
            }
        }).then((res) => {
            console.log(res.data);
            setList(res.data.playlists);
            setSongsCount(res.data.total);
        })
    }, []);
    const changePage = (page) => {
        // console.log(page);
        axios({
            url: api + '/top/playlist',
            params: {
                limit: 35,
                offset: (page - 1) * 35,
            }
        }).then((res) => {
            // console.log(res.data);
            setList(res.data.playlists);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        })
    }
    return (
        <SongsStyled>
            <div className="songs-header">
                <div className="songs-title">全部</div>
                <div className="songs-category sprite_button">
                    <span className='sprite_button'>选择分类</span>
                </div>
            </div>
            <div className="songs-content">
            {
                list.length && list.map((item, index) => {
                    return (
                        <div key={item.id} className="songs-item">
                            <YYSongsItem
                                info={item}
                                width={118}
                                size={100}
                                bgposition="-570px"
                            />
                        </div>
                    )
                })
            }
            </div>
            <YYPagination
                pageSize={35}
                total={songsCount}
                onChange={changePage}
            />
        </SongsStyled>
    )
})
