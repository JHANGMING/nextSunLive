
import LiveBanner from '@/common/components/LiveStreamPage/LiveBanner';
import LivingShowSection from '../LandingPage/LivingShowSection';
import LiveProductSection from './LiveProductSection';

const LiveStreamPage = () => {
  return (
    <>
      <LiveBanner />
      <main>
        <LivingShowSection isLivePage={true} />
        <LiveProductSection />
      </main>
    </>
  );
};

export default LiveStreamPage;
