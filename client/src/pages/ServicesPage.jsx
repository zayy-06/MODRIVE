import { useState } from "react";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesHero from "../components/services/ServicesHero";
import ServicesMatrix from "../components/services/ServicesMatrix";
import ServicesSpotlight from "../components/services/ServicesSpotlight";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesCTA from "../components/services/ServicesCTA";
import ServiceDetailModal from "../components/services/ServiceDetailModal";
import ConsultationModal from "../components/services/ConsultationModal";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreselect, setConsultationPreselect] = useState(null);

  function handleOpenServiceDetail(service) {
    setSelectedService(service);
  }

  function handleBookService(service) {
    setConsultationPreselect(service);
    setIsConsultationOpen(true);
  }

  function handleBookDyno() {
    setConsultationPreselect({ id: "dyno-remapping", title: "AWD Dyno Re-Mapping" });
    setIsConsultationOpen(true);
  }

  function handleOpenGeneralConsultation() {
    setConsultationPreselect(null);
    setIsConsultationOpen(true);
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* SECTION 1: BREADCRUMB & INTRO HEADER */}
      <ServicesIntro />

      {/* SECTION 2: HERO SHOWCASE */}
      <ServicesHero />

      {/* SECTION 3: SERVICES MATRIX (6 CORE DISCIPLINES) */}
      <ServicesMatrix onOpenDetails={handleOpenServiceDetail} />

      {/* SECTION 4: FEATURED DEEP-DIVE SERVICE (SPOTLIGHT) */}
      <ServicesSpotlight onBookDyno={handleBookDyno} />

      {/* SECTION 5: STEP-BY-STEP BUILD PROCESS */}
      <ServicesProcess />

      {/* SECTION 6: PROMINENT CONSULTATION & SERVICE BOOKING CTA */}
      <ServicesCTA onOpenConsultation={handleOpenGeneralConsultation} />

      {/* Interactive Service Detail Inspection Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={handleBookService}
        />
      )}

      {/* Interactive Consultation / Dyno Booking Modal */}
      {isConsultationOpen && (
        <ConsultationModal
          initialService={consultationPreselect}
          onClose={() => {
            setIsConsultationOpen(false);
            setConsultationPreselect(null);
          }}
        />
      )}
    </div>
  );
}
