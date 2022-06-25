import Head from "next/head";
import CatalogPage from "../../components/CatalogPage";
import { Header } from "../../components/Header";

export default function Catalog() {
    return (
        <>
            <Head>
                <title>Our Catalog</title>
            </Head>
            <Header />
            <CatalogPage />
        </>
    );
}