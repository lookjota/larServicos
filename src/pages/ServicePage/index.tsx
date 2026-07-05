import type { ServicePageProps } from './type'
import HeroSection from '../../components/service/HeroSection';


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

      <>
        <HeroSection
          hero={service.hero}
        />
      </>
    );

}