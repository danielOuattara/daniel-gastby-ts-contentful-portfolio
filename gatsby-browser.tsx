import * as React from "react";
import { GatsbyBrowser, WrapPageElementBrowserArgs } from "gatsby";
import { Layout } from "./src/components";

/* --- OK --- */
// export function wrapPageElement({
//   element,
//   props,
// }: WrapPageElementBrowserArgs): React.ReactNode {
//   return <Layout {...props}>{element}</Layout>;
// }

/* --- OK --- */
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
