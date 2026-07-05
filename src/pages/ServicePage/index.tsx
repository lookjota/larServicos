import type { ServicePageProps } from './type'

/**
 * Página responsável apenas por apresentar
 * um serviço.
 *
 * Ela não conhece Router.
 * Ela não conhece Repository.
 * Ela apenas renderiza.
 */
export default function ServicePage({

    service,

    citySlug

}: ServicePageProps) {

    return (

        <main className="max-w-6xl mx-auto py-20">

            <h1>

                {service.title}

            </h1>

            <p>

                {service.description}

            </p>

            <small>

                Cidade:

                {citySlug}

            </small>

        </main>

    );

}