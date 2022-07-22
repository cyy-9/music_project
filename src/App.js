import React, { memo, Suspense } from 'react'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store/index';

import YYAppHeader from '@/components/app-header'
import YYAppFooter from '@/components/app-footer'
import YYToolBar from './pages/play/toolbar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YYAppHeader/>
          <Suspense fallback={<div>page loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        <YYAppFooter/>
        <YYToolBar/>
      </HashRouter>
    </Provider>
  )
})
