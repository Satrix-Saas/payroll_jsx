/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Documents from '../../Custompages/Documents';
import Payslip from '../../Custompages/Payslip';
import Reimbursement from '../../Custompages/Reimbursement';
import Clients from './clients';
import ClientsList from './clientslist';
import Leades from './leades';
import Tickets from './tickets';
import TicketView from './ticketview';

const EmployeeRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/clients`} />
      <Route path={`${match.url}/clients`} component={Clients} />
      <Route path={`${match.url}/clients-list`} component={ClientsList} />
      <Route path={`${match.url}/leads`} component={Leades} />
      <Route path={`${match.url}/tickets`} component={Tickets} />
      <Route path={`${match.url}/ticket-view`} component={TicketView} />
      <Route path={`${match.url}/documents`} component={Documents} />
      <Route path={`${match.url}/payslip`} component={Payslip} />
      <Route path={`${match.url}/reimbursement`} component={Reimbursement} />
   </Switch>
);

export default EmployeeRoute;
