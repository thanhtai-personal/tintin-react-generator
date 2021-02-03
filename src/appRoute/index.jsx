import React from 'react'
import { Route, Switch } from 'react-router'
import appRouteInstant from 'root/managers/appRoute/instant'
import defaultRoute from 'root/features/default/routes'
import portfolioRoute from 'root/features/portfolio/routes'
import bloggerRoute from 'root/features/blogger/routes'
import eventEmitter from 'event-emitter'

const appRouteManager = appRouteInstant()
window.emitter = eventEmitter()

function AppRoute () {
  appRouteManager.add('portfolio', portfolioRoute)
  appRouteManager.add('default', defaultRoute)
  appRouteManager.add('blogger', bloggerRoute)

  return (
    <> { /* your usual react-router v4/v5 routing */}
      <Switch>
        {appRouteManager.reduce()}
        <Route render={() => (<div>Route not found!</div>)} />
      </Switch>
    </>
  );
}

export default AppRoute