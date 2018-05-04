/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostListItem_post$ref: FragmentReference;
export type PostListItem_post = {|
  +id: string,
  +title: string,
  +comments: ?$ReadOnlyArray<{|
    +id: string
  |}>,
  +$refType: PostListItem_post$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PostListItem_post",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
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
        v0
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f733b015f5f911481af306435947a94';
module.exports = node;
