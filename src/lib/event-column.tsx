import {ColumnDef} from '@tanstack/react-table';
import {ArrowUpDown} from 'lucide-react';
import {Button} from '../components/ui/button';
import {Dialog, DialogTrigger, DialogContent} from '@radix-ui/react-dialog';
import { Members } from './member-column';

export type Events = {
  id: string;
  name: string;
  speaker: string;
  schedule: string;
  location: string;
  members: string[];
};



export const EventsColumn: ColumnDef<Events>[] = [
  {
    accessorKey: 'name',
    header: 'Nama Event',
  },
  {
    accessorKey: 'schedule',
    header: 'Jadwal',
  },
  {
    accessorKey: 'location',
    header: ({column}) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Lokasi
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'speaker',
    header: 'Pembicara',
  },
  {
    accessorKey: 'members',
    header: 'Anggota',
    cell: ({row}) => {
      const members = row.getValue('members') || [];
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' size='sm'>
              Lihat Anggota
            </Button>
          </DialogTrigger>
          <DialogContent className='max-h-[80vh] overflow-y-auto'>
            <ul className='space-y-2'>
              {members.map((member: string, idx: number) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
