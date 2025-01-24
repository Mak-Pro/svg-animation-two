import CTA from '@/components/home/cta'
import FeatureScroll from '@/components/features/featureScroll'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <FeatureScroll />   
      <CTA />
    </div>
  )
}
