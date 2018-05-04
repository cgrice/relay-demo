/**
 * @flow
 * @relayHash 9f998400198132502c331865a71c9522
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostList_posts$ref = any;
export type HomeContainerQueryVariables = {||};
export type HomeContainerQueryResponse = {|
  +posts: $ReadOnlyArray<?{|
    +$fragmentRefs: PostList_posts$ref
  |}>
|};
*/


/*
query HomeContainerQuery {
  posts {
    ...PostList_posts
    id
  }
}

fragment PostList_posts on Post {
  id
  ...PostListItem_post
}

fragment PostListItem_post on Post {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeContainerQuery",
  "id": null,
  "text": "query HomeContainerQuery {\n  posts {\n    ...PostList_posts\n    id\n  }\n}\n\nfragment PostList_posts on Post {\n  id\n  ...PostListItem_post\n}\n\nfragment PostListItem_post on Post {\n  id\n  title\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PostList_posts",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '9d82204851034293599fe3011ab86eba';
module.exports = node;
