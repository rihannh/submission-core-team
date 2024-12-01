import {getEvents} from '@/lib/event';
import {getMembers} from '@/lib/member';
import {useState, useEffect} from 'react';

export default function Dashboard() {
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const storedEvents = getEvents();
    const storedMembers = getMembers();
    setTotalEvents(storedEvents.length);
    setTotalMembers(storedMembers.length);
  }, []);

  return (
    <div className='dashboard-container p-5 space-y-5'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Card untuk jumlah Event */}
        <div className='card p-4 border rounded-md shadow-md bg-white'>
          <h2 className='text-xl font-semibold'>Total Events</h2>
          <p className='text-3xl font-bold text-violet-500'>{totalEvents}</p>
        </div>

        {/* Card untuk jumlah Members */}
        <div className='card p-4 border rounded-md shadow-md bg-white'>
          <h2 className='text-xl font-semibold'>Total Members</h2>
          <p className='text-3xl font-bold text-violet-500'>{totalMembers}</p>
        </div>
      </div>
    </div>
  );
}
