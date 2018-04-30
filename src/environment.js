import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { makePromise, execute } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { parse } from 'graphql'

const source = new RecordSource()
const store = new Store(source)

const link = new HttpLink({
    uri: 'http://localhost:8000/app_dev.php/graphql'
})

const network = Network.create(
    (operation, variables) => makePromise(
        execute(
            link, {
                query: parse(operation.text),
                variables,
            }
        )
    )
)

const environment = new Environment({
    network,
    store,
})

export default environment
