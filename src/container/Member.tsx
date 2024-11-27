import {Members, MembersColumn} from '@/components/member-column';
import {MemberTable} from '@/components/member-table';

const dataMembers: Members[] = [
  {
    id: '1',
    nim: '123456',
    name: 'Rihan Naufaldihanif',
    division: 'Front-End',
    role: 'Core team',
    email: 'rihan@mail.com',
  },
  {
    id: '2',
    nim: '123456',
    name: 'Naufal',
    division: 'Back-End',
    role: 'Member',
    email: '}',
  },
];

const Member = () => {
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Data Anggota</h1>
      <MemberTable columns={MembersColumn} data={dataMembers} />
    </>
  );
};

export default Member;
