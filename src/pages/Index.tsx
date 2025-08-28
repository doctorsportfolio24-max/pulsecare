
import HeroSection from '../components/HeroSection';
import HealingPhilosophy from '../components/HealingPhilosophy';
import EcoFacilities from '../components/EcoFacilities';
import HolisticCare from '../components/HolisticCare';
import PatientJourneys from '../components/PatientJourneys';
import CommunityGarden from '../components/CommunityGarden';
import VolunteerSection from '../components/VolunteerSection';
import FloatingActions from '../components/FloatingActions';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HealingPhilosophy />
      <EcoFacilities />
      <HolisticCare />
      <PatientJourneys />
      <CommunityGarden />
      <VolunteerSection />
      <FloatingActions />
    </div>
  );
};

export default Index;
