/**
 * @flow
 * @relayHash 7199cf640f57469760866381163cd1cf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Post_post$ref = any;
export type PostWhereUniqueInput = {
  id?: ?string
};
export type PostDetailQueryVariables = {|
  where: PostWhereUniqueInput
|};
export type PostDetailQueryResponse = {|
  +post: ?{|
    +$fragmentRefs: Post_post$ref
  |}
|};
*/


/*
query PostDetailQuery(
  $where: PostWhereUniqueInput!
) {
  post(where: $where) {
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
    "name": "where",
    "type": "PostWhereUniqueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where",
    "type": "PostWhereUniqueInput!"
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
  "text": "query PostDetailQuery(\n  $where: PostWhereUniqueInput!\n) {\n  post(where: $where) {\n    ...Post_post\n    id\n  }\n}\n\nfragment Post_post on Post {\n  id\n  title\n  content\n  comments {\n    ...CommentList_comments\n    id\n  }\n}\n\nfragment CommentList_comments on Comment {\n  id\n  content\n  author\n}\n",
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
        "alias": null,
        "name": "post",
        "storageKey": null,
        "args": v1,
        "concreteType": "Post",
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
        "alias": null,
        "name": "post",
        "storageKey": null,
        "args": v1,
        "concreteType": "Post",
        "plural": false,
        "selections": [
          v2,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '19d6293cf9bb0ad43d6f179642a5dd3d';
module.exports = node;
