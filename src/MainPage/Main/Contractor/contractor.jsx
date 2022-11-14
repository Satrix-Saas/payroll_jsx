/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContractorPayment from '../../../Custompages/ContractorPayment';
import ContractorReimbrusement from '../../../Custompages/ContractorReimbrusement';


const ContractorRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/contractor`} />
      <Route path={`${match.url}/contractorReimbrusement`} component={ContractorReimbrusement} />
      {/* <Route path={`${match.url}/contractorPayment`} component={ContractorPayment} /> */}
   </Switch>
  
);

export default ContractorRoute;
