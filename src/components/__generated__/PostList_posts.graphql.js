/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PostListItem_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostList_posts$ref: FragmentReference;
export type PostList_posts = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: PostListItem_post$ref,
  +$refType: PostList_posts$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PostList_posts",
  "type": "Post",
  "metadata": {
    "plural": true
  },
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
      "kind": "FragmentSpread",
      "name": "PostListItem_post",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3cb246ef935463b0e7b76ba0e63b2701';
module.exports = node;
