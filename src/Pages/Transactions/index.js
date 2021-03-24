import { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import send from '../../api';
import Transaction from './Transaction';
import loginDetailsContext from '../../context/loginDetailsContext';

const Accounts = ({ transactionIds, setField, transactions }) => {
    const { id } = useContext(loginDetailsContext);

    useEffect(() => {
        const getData = async () => {
            const res = await send({
                url: '/transactions',
                method: 'POST',
                body: { transactionIds, id },
            })
            setField({ name: 'transactions', value: res });
        }
        getData();
    }, [transactionIds]);

    return (<>
        {transactions.map((transaction) => <Transaction key={transaction.id} {...transaction} />)}
    </>);
}

const mapState = ({ transactions: { transactionIds, transactions } }) => ({ transactionIds, transactions });

const mapDispatch = ({ transactions: { setField } }) => ({
    setField,
})

export default connect(mapState, mapDispatch)(Accounts);