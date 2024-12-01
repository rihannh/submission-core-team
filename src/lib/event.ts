import {EventFormSchema} from '@/components/event-form';
import {z} from 'zod';
import { Events } from './event-column';
import { v4 as uuidv4 } from 'uuid';

export const addEvent = (
  newEvent: z.infer<typeof EventFormSchema>,
  members: string[]
) => {
  const existingEvents = localStorage.getItem('eventData');
  const events = existingEvents ? JSON.parse(existingEvents) : [];

  const eventWithId = {...newEvent, id: uuidv4(), members};
  events.push(eventWithId);

  localStorage.setItem('eventData', JSON.stringify(events));
};

export const getEvents = () => {
  const existingEvents = localStorage.getItem('eventData');
  return existingEvents ? JSON.parse(existingEvents) : [];
};

export const deleteEvent = (id: string): Events[] => {
  const existingEvents = localStorage.getItem('eventData');
  const events = existingEvents ? JSON.parse(existingEvents) : [];
  console.log(id)
  console.log(events.id)

  const updatedEvents = events.filter((event: Events) => event.id !== id);

  localStorage.setItem('eventData', JSON.stringify(updatedEvents));

  return updatedEvents;
};
