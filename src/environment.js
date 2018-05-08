import { Environment, Network, RecordSource, Store } from 'relay-runtime'

function fetchQuery(
    operation,
    variables,
    cacheConfig,
    uploadables,
) {
    return fetch('http://localhost:4466/', {
        method: 'POST',
        headers: {
            // Add authentication and other headers here
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables,
        }),
    }).then(response => {
        return response.json()
    })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

const environment = new Environment({
    network,
    store,
})

export default environment
