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
import {addMember} from '@/lib/member';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

export const MemberFormSchema = z.object({
  nim: z.string().min(9, {
    message: 'Minimal 9 karakter.',
  }),
  name: z.string({
    required_error: 'Masukan nama dengan benar.',
  }),
  division: z.string({
    required_error: 'Masukan divisi dengan benar.',
  }),
  role: z.string({
    required_error: 'Masukan role dengan benar.',
  }),
  email: z
    .string({
      required_error: 'Masukan email dengan benar.',
    })
    .email(),
});

export function MemberForm() {
  const form = useForm<z.infer<typeof MemberFormSchema>>({
    resolver: zodResolver(MemberFormSchema),
    defaultValues: {
      nim: '',
      name: '',
      division: '',
      role: '',
      email: '',
    },
  });

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof MemberFormSchema>) {
    try {
      console.log(values);
      addMember(values);
      toast({
        title: 'Data member berhasil ditambahkan.',
        description: `${values.name} berhasil menjadi member.`,
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      toast({
        title: 'Gagal menambahkan data member.',
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
          name='nim'
          render={({field}) => (
            <FormItem>
              <FormLabel>NIM</FormLabel>
              <FormControl>
                <Input placeholder='09031282227038' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel>Nama Member</FormLabel>
              <FormControl>
                <Input placeholder='Rihan Naufaldihanif' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='division'
          render={({field}) => (
            <FormItem>
              <FormLabel>Divisi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Pilih Divisi' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Game Development'>
                    Game Development
                  </SelectItem>
                  <SelectItem value='Back-End Development'>
                    Back-End Development
                  </SelectItem>
                  <SelectItem value='Front-End Development'>
                    Front-End Development
                  </SelectItem>
                  <SelectItem value='UI/UX'>UI/UX</SelectItem>
                  <SelectItem value='Cyber Security'>Cyber Security</SelectItem>
                  <SelectItem value='Machine Learning'>
                    Machine Learning
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='role'
          render={({field}) => (
            <FormItem>
              <FormLabel>Divisi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Pilih Role' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Core Team'>Core Team</SelectItem>
                  <SelectItem value='Member'>Member</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='rihan@mail.com' {...field} />
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
