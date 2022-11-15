/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import OneTimePayment from '../../../Custompages/Employee/OneTimePayment';
import RunPayroll from '../../../Custompages/Employee/RunPayroll';




const EmployeeRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/runPayroll`} />
      <Route path={`${match.url}/runPayroll`} component={RunPayroll} />
      <Route path={`${match.url}/one-time-payment`} component={OneTimePayment} />
   </Switch>
  
);

export default EmployeeRoute;
