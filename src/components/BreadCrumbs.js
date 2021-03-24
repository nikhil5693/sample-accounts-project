import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import MLink from '@material-ui/core/Link';

const BreadCrumb = ({ link }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{ padding: '10px' }}>
            <Link color="inherit" to="/accounts">
                Accounts
            </Link>
            {link && <MLink color="inherit">{link}</MLink>}
        </Breadcrumbs>
    );
}

export default BreadCrumb;