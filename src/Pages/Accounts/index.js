import { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import send from '../../api';
import Account from './Account';
import loginDetailsContext from '../../context/loginDetailsContext';

const Accounts = (props) => {
    const { accounts, setData, setField } = props;
    const { id } = useContext(loginDetailsContext);
    useEffect(() => {
        if (accounts.length > 0) return;
        const getData = async () => {
            const res = await send({
                url: '/accounts',
                method: 'POST',
                body: { id },
            })
            setData(res);
        }
        getData();
    });

    const setTransactions = async (transactions) => {
        await setField({ name: 'transactionIds', value: transactions });

        props.history.push('/transactions');
    };

    return (<>
        {accounts.map((account) => <Account key={account.accountId} {...account} setTransactions={setTransactions} />)}
    </>);
}

const mapState = ({ accounts: { accounts } }) => ({ accounts });

const mapDispatch = ({ accounts: { setData }, transactions: { setField } }) => ({
    setData,
    setField,
})

export default connect(mapState, mapDispatch)(Accounts);