import type { LoaderFunctionArgs } from "react-router";
import { redirect, Form, useLoaderData } from "react-router";

import { login } from "../../shopify.server";

import styles from "./styles.module.css";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function App() {
  const { showForm } = useLoaderData<typeof loader>();

  return (
    <div className={styles.index}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Audit SEO</h1>
        <p className={styles.text}>
          Audit et suivi SEO de votre boutique Shopify : crawl de pages,
          détection d&apos;anomalies et suivi de mots-clés.
        </p>
        {showForm && (
          <Form className={styles.form} method="post" action="/auth/login">
            <label className={styles.label}>
              <span>Shop domain</span>
              <input className={styles.input} type="text" name="shop" />
              <span>e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button className={styles.button} type="submit">
              Log in
            </button>
          </Form>
        )}
        <ul className={styles.list}>
          <li>
            <strong>Crawl automatisé</strong>. Analysez les pages de votre
            boutique et détectez les problèmes techniques SEO.
          </li>
          <li>
            <strong>Suivi des mots-clés</strong>. Surveillez vos positions et
            leur évolution dans le temps.
          </li>
          <li>
            <strong>Rapports détaillés</strong>. Recevez des recommandations
            claires pour améliorer votre référencement.
          </li>
        </ul>
      </div>
    </div>
  );
}
