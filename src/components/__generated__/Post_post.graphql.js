/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CommentList_comments$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Post_post$ref: FragmentReference;
export type Post_post = {|
  +id: string,
  +title: string,
  +content: string,
  +comments: ?$ReadOnlyArray<{|
    +$fragmentRefs: CommentList_comments$ref
  |}>,
  +$refType: Post_post$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Post_post",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
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
};
// prettier-ignore
(node/*: any*/).hash = '98efcebf95bc8e24ac807f314ae07be2';
module.exports = node;
