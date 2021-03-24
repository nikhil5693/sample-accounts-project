import { Container } from '@material-ui/core';
import { Route, Redirect } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumbs';
import Header from '../components/Header';

const PrivateRoute = ({ component: Component, link = '', isLoggedIn, showAddAccount, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => isLoggedIn
                ? <>
                    <Header showAddAccount={showAddAccount} />
                    <Container component="main" maxWidth="md">
                        <BreadCrumb link={link} />
                        <Component {...props} />
                    </Container>
                </>
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}


export default PrivateRoute;