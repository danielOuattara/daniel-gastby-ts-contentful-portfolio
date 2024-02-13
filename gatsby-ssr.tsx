import * as React from "react";
import { GatsbySSR, WrapPageElementBrowserArgs } from "gatsby";
import { Layout } from "./src/components";

// /* --- OK --- */
// export function wrapPageElement2({
//   element,
//   props,
// }: WrapPageElementBrowserArgs): React.ReactNode {
//   return <Layout {...props}>{element}</Layout>;
// }

/* --- OK --- */
export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
