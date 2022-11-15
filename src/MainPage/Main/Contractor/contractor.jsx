/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContractorPayment from '../../../Custompages/Contractor/ContractorPayment';
import ContractorReimbrusement from '../../../Custompages/Contractor/ContractorReimbrusement';




const ContractorRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/contractorReimbrusement`} />
      <Route path={`${match.url}/contractorReimbrusement`} component={ContractorReimbrusement} />
      <Route path={`${match.url}/contractorpay`} component={ContractorPayment} />
   </Switch>
  
);

export default ContractorRoute;
