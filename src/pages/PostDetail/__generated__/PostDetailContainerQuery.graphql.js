/**
 * @flow
 * @relayHash 08c379b84e969e9b23de62095e3c0e87
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CommentList_comments$ref = any;
type Post_post$ref = any;
export type PostWhereUniqueInput = {
  id?: ?string
};
export type PostDetailContainerQueryVariables = {|
  where: PostWhereUniqueInput
|};
export type PostDetailContainerQueryResponse = {|
  +post: ?{|
    +id: string,
    +comments: ?$ReadOnlyArray<{|
      +$fragmentRefs: CommentList_comments$ref
    |}>,
    +$fragmentRefs: Post_post$ref,
  |}
|};
*/


/*
query PostDetailContainerQuery(
  $where: PostWhereUniqueInput!
) {
  post(where: $where) {
    id
    ...Post_post
    comments {
      ...CommentList_comments
      id
    }
  }
}

fragment Post_post on Post {
  id
  title
  content
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
  "name": "PostDetailContainerQuery",
  "id": null,
  "text": "query PostDetailContainerQuery(\n  $where: PostWhereUniqueInput!\n) {\n  post(where: $where) {\n    id\n    ...Post_post\n    comments {\n      ...CommentList_comments\n      id\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  title\n  content\n}\n\nfragment CommentList_comments on Comment {\n  id\n  content\n  author\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PostDetailContainerQuery",
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
          v2,
          {
            "kind": "FragmentSpread",
            "name": "Post_post",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CommentList_comments",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostDetailContainerQuery",
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
(node/*: any*/).hash = '217913ed870fee6dffdd12d05c6be608';
module.exports = node;
