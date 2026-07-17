import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "*.css";

// `@shopify/polaris-types` does not yet declare the `<s-app-nav>` Polaris web
// component used for the embedded app navigation, so it's typed here.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "s-app-nav": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
