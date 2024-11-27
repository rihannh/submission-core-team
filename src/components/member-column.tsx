import {ColumnDef} from '@tanstack/react-table';
import {ArrowUpDown} from 'lucide-react';
import {Button} from './ui/button';

export type Members = {
  id: string;
  nim: string;
  name: string;
  division: string;
  role: string;
  email: string;
};

export const MembersColumn: ColumnDef<Members>[] = [
  {
    accessorKey: 'nim',
    header: 'NIM',
  },
  {
    accessorKey: 'name',
    header: 'Nama',
  },
  {
    accessorKey: 'division',
    header: ({column}) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Divisi
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'role',
    header: ({column}) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Role
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];
