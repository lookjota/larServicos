import { useParams } from "react-router-dom";
import { getServiceBySlug } from "../../data/servicesData";

export default function ServicePage() {
  const { slug } = useParams();

  const service = getServiceBySlug(slug ?? "");

  if (!service) {
    return (
      <main className="max-w-6xl mx-auto py-20">
        <h1>Serviço não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto py-20">
      <h1>{service.title}</h1>

      <p>{service.description}</p>
    </main>
  );
}