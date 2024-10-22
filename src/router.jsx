import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import WhatIsNetwork from './pages/WhatIsNetwork';
import NetworkTypes from './pages/NetworkTypes';
import AdvantagesDisadvantages from './pages/AdvantagesDisadvantages';
import RecommendedNetwork from './pages/RecommendedNetwork';
import NotFound from './pages/NotFound';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/what-is-network" component={WhatIsNetwork} />
        <Route path="/network-types" component={NetworkTypes} />
        <Route path="/advantages-disadvantages" component={AdvantagesDisadvantages} />
        <Route path="/recommended-network" component={RecommendedNetwork} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
