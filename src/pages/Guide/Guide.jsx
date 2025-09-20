import "./Guide.css";
import MissionVision from "../../components/Guide/MissionVision";
import ProcedureGuide from "../../components/Guide/ProcedureGuide";
import ServiceGuide from "../../components/Guide/ServiceGuide";
import CostGuide from "../../components/Guide/CostGuide";
import SupportGuide from "../../components/Guide/SupportGuide";
import FAQ from "../../components/Guide/FAQ";
import CTASection from "../../components/Guide/CTASection";
import HeroSection from "../../components/Guide/HeroSection";

export default function Guide() {
  return (
    <>
      <HeroSection />

      {/* 절차 안내 */}
      <ProcedureGuide />

      {/* 서비스 안내 */}
      <ServiceGuide />

      {/* 비용 안내 */}
      <CostGuide />

      {/* 심리 상담 */}
      <SupportGuide />

      {/* FAQ */}
      <FAQ />

      {/* 미션/비전 지우기 또는 위치 변경 */}
      <MissionVision />

      {/* 상담 CTA */}
      <CTASection />
    </>
  );
}

{
  /*장례정보 */
}
