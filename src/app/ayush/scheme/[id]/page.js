
import SchemeDetails from "@/components/schemes/schemaDetails/SchemeDetails";
import { schemes } from "@/constants/page";

export default async function SchemePage({ params }) {
    const { id } = await params
  const scheme =schemes.find((s) => s.id === parseInt(id));
  return scheme ? <SchemeDetails scheme={scheme} /> : <p>Scheme not found</p>;
}

export async function generateStaticParams() {
  return schemes.map((scheme) => ({ id: scheme.id.toString() }));
}
