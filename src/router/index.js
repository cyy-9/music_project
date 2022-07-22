import { Redirect } from 'react-router-dom';
import React from 'react'

const YYDiscover = React.lazy(() => import('../pages/discover/index'))
const YYFriend = React.lazy(() => import('../pages/friend/index'))
const YYMine = React.lazy(() => import('../pages/mine/index'))
// import YYDiscover from '../pages/discover/index'
// import YYFriend from '../pages/friend/index'
// import YYMine from '../pages/mine/index'

const YYRecommend = React.lazy(() => import('../pages/discover/child-pages/recommend'))
const YYAlbum = React.lazy(() => import('../pages/discover/child-pages/album'))
const YYArtist = React.lazy(() => import('../pages/discover/child-pages/artist'))
const YYDjradio = React.lazy(() => import('../pages/discover/child-pages/djradio'))
const YYRanking = React.lazy(() => import('../pages/discover/child-pages/ranking'))
const YYSongs = React.lazy(() => import('../pages/discover/child-pages/songs'))
const YYPlay = React.lazy(() => import('../pages/play/index'))
// import YYRecommend from '../pages/discover/child-pages/recommend'
// import YYAlbum from '../pages/discover/child-pages/album'
// import YYArtist from '../pages/discover/child-pages/artist'
// import YYDjradio from '../pages/discover/child-pages/djradio'
// import YYRanking from '../pages/discover/child-pages/ranking'
// import YYSongs from '../pages/discover/child-pages/songs'
// import YYPlay from '../pages/play/index'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => ( // 路由重定向，当路径为 / 时，调用 render函数，渲染 <Redirect/>组件
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: YYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: '/discover/recommend',
                component: YYRecommend,
            },
            {
                path: '/discover/album',
                component: YYAlbum,
            },
            {
                path: '/discover/artist',
                component: YYArtist,
            },
            {
                path: '/discover/djradio',
                component: YYDjradio,
            },
            {
                path: '/discover/ranking',
                component: YYRanking,
            },
            {
                path: '/discover/songs',
                component: YYSongs,
            },
            {
                path: '/discover/play',
                component: YYPlay,
            },
        ]
    },
    {
        path: '/my',
        component: YYMine,
    },
    {
        path: '/friend',
        component: YYFriend,
    }
]

export default routes;