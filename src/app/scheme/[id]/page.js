
import SchemeDetails from "@/components/schemes/schemaDetails/SchemeDetails";
export const dynamic = "force-dynamic";

export default async function SchemePage({ params }) {
    const { id } =  await params
    
    
  return  <SchemeDetails id={id} /> 
}
