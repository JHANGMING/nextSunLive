import ViewBanner from '@/common/components/LiveStreamPage/ViewBanner';
import LiveViewer from './LiveViewer';
import LiveSaleSection from './LiveSaleSection';
import LiveBanner from '@/common/components/LiveStreamPage/LiveBanner';
import LiveChat from './LiveChat';

const LiveStreamView = () => {
  return (
    <>
      {/* <ViewBanner />
      <LiveViewer />
      <LiveSaleSection /> */}
      <LiveChat />
    </>
  );
};

export default LiveStreamView;
