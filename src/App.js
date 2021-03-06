import './App.css';
import {Route, Switch} from "react-router-dom";
import NotFoundPage from "./pages/404/not-found-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import VerificationSuccessPage from "./pages/authentication/verification-success-page";
import ResetPasswordSuccessPage from "./pages/authentication/reset-password-success-page";

function App() {
  return (
    <Switch>
      <Route path="/auth/verify/:token" component={VerifyAccountPage} exact={true} />
      <Route path="/auth/reset-password/:token" component={ResetPasswordPage} exact={true} />
      <Route path="/auth/verification/success" component={VerificationSuccessPage} exact={true} />
      <Route path="/auth/password-reset/success" component={ResetPasswordSuccessPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
