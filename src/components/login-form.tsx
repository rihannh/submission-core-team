import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';

const loginFormSchema = z.object({
  email: z.string().email({message: 'Please enter a valid email address'}),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters'}),
});

export function LoginForm({
  onLogin,
}: {
  onLogin: (email: string, password: string) => void;
}) {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: 'rihan@test.com',
      password: '12345678',
    },
  });

  function onSubmit(data: z.infer<typeof loginFormSchema>) {
    onLogin(data.email, data.password);
    console.log(data);
  }

  return (
    <Card className='max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='rihan1234@mail.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='********'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                to='#'
                className='ml-auto text-slate-600 inline-block text-sm underline -mt-4'
              >
                Forget password?
              </Link>
            </div>

            <Button className='w-full' type='submit'>
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
