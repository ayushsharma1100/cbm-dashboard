import AlertContainer from './Alert Container/index.js';
import DashboardContainer from './Dashboard Container/index';

export default function Dashboard() {
  return (
    <div className={`flex gap-4 transition-all p-4`}>
        <div className='w-3/4 space-y-4'>
          <DashboardContainer />
        </div>
        <div className='w-1/4'>
          <AlertContainer />
        </div>
    </div>
  )
}
