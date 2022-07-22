import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import {
    DiscoverWrapper,
    TopMenu,
} from './style'
import {discoverMenu} from '@/common/local-data.js'
// import request from '@/services/request'

export default memo(function YYDiscover(props) {
    const {route} = props;  // 调用 renderRoutes函数时，配置的路由会自动添加到该组件的 props中
    // console.log(route)   
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                {
                    discoverMenu.map((item, index) => {
                        return (
                            <div className="item" key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                    })
                }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
