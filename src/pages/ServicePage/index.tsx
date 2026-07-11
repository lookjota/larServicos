import PageRenderer from "../../components/PageRenderer";

import type { ServicePageProps } from "./type"

import { ServiceSectionsBuilder } from "../../domain/builders/ServiceSectionsBuilder";

export default function ServicePage({
  service,
}: ServicePageProps) {


  const sections =
    ServiceSectionsBuilder.build(service);
  return (

    <PageRenderer
    sections={sections}
    />

  );

}
