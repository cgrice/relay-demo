/**
 * @flow
 * @relayHash 80e1a7d183eedb0bfdffaf0c1ada4711
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Post_post$ref = any;
export type PostDetailQueryVariables = {|
  postId: string
|};
export type PostDetailQueryResponse = {|
  +post: ?{|
    +$fragmentRefs: Post_post$ref
  |}
|};
*/


/*
query PostDetailQuery(
  $postId: ID!
) {
  post: node(id: $postId) {
    __typename
    ...Post_post
    id
  }
}

fragment Post_post on Post {
  id
  title
  content
  comments {
    ...CommentList_comments
    id
  }
}

fragment CommentList_comments on Comment {
  id
  content
  author
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "postId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "postId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PostDetailQuery",
  "id": null,
  "text": "query PostDetailQuery(\n  $postId: ID!\n) {\n  post: node(id: $postId) {\n    __typename\n    ...Post_post\n    id\n  }\n}\n\nfragment Post_post on Post {\n  id\n  title\n  content\n  comments {\n    ...CommentList_comments\n    id\n  }\n}\n\nfragment CommentList_comments on Comment {\n  id\n  content\n  author\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PostDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "post",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Post_post",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "post",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "InlineFragment",
            "type": "Post",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comments",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": true,
                "selections": [
                  v2,
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "author",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '103aaff4b89602bbfb9d12e5eadc1c57';
module.exports = node;
