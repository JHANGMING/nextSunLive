import ViewBanner from '@/common/components/LiveStreamPage/ViewBanner';
import LiveViewer from './LiveViewer';
import LiveSaleSection from './LiveSaleSection';

const LiveStreamView = () => {
  return (
    <>
      <ViewBanner />
      <main>
        <LiveViewer/>
        <LiveSaleSection/>
      </main>
    </>
  );
};

export default LiveStreamView;
