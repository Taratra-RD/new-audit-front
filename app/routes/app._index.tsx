import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  return (
    <s-page heading="Audit SEO">
      <s-section heading="Bienvenue">
        <s-paragraph>
          Retrouvez ici le tableau de bord de vos audits SEO. Rendez-vous dans{" "}
          <s-link href="/app/configuration">Configuration</s-link> pour
          paramétrer l&apos;application.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
