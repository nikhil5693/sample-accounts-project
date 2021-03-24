import accounts from '../mock/accounts';
import transactions from '../mock/transactions';
import loginDetails from '../mock/login';
import { Server } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
    let server = new Server({
        environment,

        routes() {
            this.timing = 750;

            this.post("/login", (_, request) => {
                const details = JSON.parse(request.requestBody);
                const data = loginDetails.find(({ userName, password }) => details.userName === userName && details.password === password)
                return data;
            });

            this.post(
                "/accounts",
                (_, request) => {
                    const { id } = JSON.parse(request.requestBody);
                    const data = accounts.find((account) => account.id === id)

                    return data;
                },
                { timing: 500 }
            );

            this.post(
                "/transactions",
                (_, request) => {
                    const { id, transactionIds } = JSON.parse(request.requestBody);
                    const data = transactions[id].filter((transaction) => transactionIds.includes(transaction.id))

                    return data;
                },
                { timing: 500 }
            );
        }
    });

    return server;
}