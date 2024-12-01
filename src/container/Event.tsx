import { Events, EventsColumn } from '@/lib/event-column';
import { EventTable } from '@/components/event-table';
import {useEffect, useState} from 'react';
import {getEvents, deleteEvent} from '@/lib/event';

const Event = () => {
  const [dataEvents, setDataEvents] = useState<Events[]>([]);

  useEffect(() => {
    const events = getEvents();
    setDataEvents(events);
  }, []);

  const hadleDelete = (id: string) => {
    const udpatedMebers = deleteEvent(id);
    setDataEvents(udpatedMebers);
  }
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Data Anggota</h1>
      <EventTable columns={EventsColumn} data={dataEvents} onDelete={hadleDelete}/>
    </>
  );
};

export default Event;
