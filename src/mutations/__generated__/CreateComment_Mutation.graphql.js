/**
 * @flow
 * @relayHash ceb6f73cf8498652d1387ce419aaa8f1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CommentCreateInput = {
  content: string,
  author: string,
  post: PostCreateOneWithoutCommentsInput,
};
export type PostCreateOneWithoutCommentsInput = {
  create?: ?PostCreateWithoutCommentsInput,
  connect?: ?PostWhereUniqueInput,
};
export type PostCreateWithoutCommentsInput = {
  title: string,
  content: string,
};
export type PostWhereUniqueInput = {
  id?: ?string
};
export type CreateComment_MutationVariables = {|
  input: CommentCreateInput
|};
export type CreateComment_MutationResponse = {|
  +createComment: {|
    +id: string,
    +content: string,
    +author: string,
  |}
|};
*/


/*
mutation CreateComment_Mutation(
  $input: CommentCreateInput!
) {
  createComment(data: $input) {
    id
    content
    author
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CommentCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "input",
        "type": "CommentCreateInput!"
      }
    ],
    "concreteType": "Comment",
    "plural": false,
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
        "name": "content",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateComment_Mutation",
  "id": null,
  "text": "mutation CreateComment_Mutation(\n  $input: CommentCreateInput!\n) {\n  createComment(data: $input) {\n    id\n    content\n    author\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateComment_Mutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateComment_Mutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4cf89859726ea9f8b4caff2151968f03';
module.exports = node;
