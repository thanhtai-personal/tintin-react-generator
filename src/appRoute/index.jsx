import { Route, Switch } from 'react-router'

import appRouteInstant from 'root/managers/appRoute/instant'
import defaultRoute from 'root/features/default/routes'

const appRouteManager = appRouteInstant()

function AppRoute () {
  appRouteManager.add('default', defaultRoute)
  return (
    <> { /* your usual react-router v4/v5 routing */}
      <Switch>
        {appRouteManager.reduce()}
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </>
  );
}

export default AppRoute