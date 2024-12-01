import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {toast} from '@/hooks/use-toast';
import {addEvent} from '@/lib/event';
import {getMembers} from '@/lib/member';
import {Calendar} from './ui/calendar';
import {CalendarIcon} from 'lucide-react';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {format} from 'date-fns';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

export const EventFormSchema = z.object({
  name: z.string().min(1, {message: 'Nama tidak boleh kosong'}), // min(1) memastikan input tidak kosong
  speaker: z.string().min(1, {message: 'Pembicara tidak boleh kosong.'}),
  schedule: z
    .date({
      required_error: 'Jadwal tidak boleh kosong.',
    })
    .refine((val) => !isNaN(val.getTime()), {
      message: 'Jadwal harus berupa tanggal yang valid.',
    }),
  location: z.string().min(1, {message: 'Location tidak boleh kosong.'}), // validasi location
  members: z.array(z.string()).optional(),
});

export function EventForm() {
  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: {
      name: '',
      speaker: '',
      location: '',
      schedule: new Date(),
      members: [],
    },
  });

  const members = getMembers();
  const navigate = useNavigate();
  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    try {
      // console.log(values);
      const selectedMembers = form.getValues('members');
      addEvent(values, selectedMembers || []);
      toast({
        title: 'Event berhasil ditambahkan.',
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
      console.log(form.getValues());
    } catch (error) {
      toast({
        title: 'Gagal menambahkan event.',
        description: `Error : ${error}`,
      });
    }
  }

  return (
    <Form {...form}>
      <h1 className='text-xl font-bold mb-2'>Tambah Data Member</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel>Nama Event</FormLabel>
              <FormControl>
                <Input placeholder='Nama Event' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='schedule'
          render={({field}) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Jadwal</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className='w-[280px] justify-start text-left font-normal'
                    >
                      <CalendarIcon />
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='location'
          render={({field}) => (
            <FormItem>
              <FormLabel>Lokasi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Pilih Lokasi' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Offline'>Offline</SelectItem>
                  <SelectItem value='Online'>Online</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='speaker'
          render={({field}) => (
            <FormItem>
              <FormLabel>Pembicara</FormLabel>
              <FormControl>
                <Input placeholder='Rihan Naufaldihanif' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='members'
          render={({field}) => (
            <FormItem>
              <FormLabel>Anggota</FormLabel>
              <FormControl>
                <ul className='space-y-2 max-h-60 overflow-y-auto p-2 border border-gray-300 rounded'>
                  {members.map((member: { id: string; name: string; division: string }) => (
                    <li key={member.id}>
                      <label className='flex items-center'>
                        <input
                          type='checkbox'
                          value={member.id}
                          checked={field.value?.includes(member.id)}
                          onChange={(e) => {
                            const selectedValues = e.target.checked
                              ? [...(field.value || []), member.id]
                              : field.value?.filter(
                                  (id: string) => id !== member.id
                                );
                            field.onChange(selectedValues);
                          }}
                          className='mr-2'
                        />
                        {member.name} - {member.division}
                      </label>
                    </li>
                  ))}
                </ul>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
