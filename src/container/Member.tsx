import {Members, MembersColumn} from '@/lib/member-column';
import {MemberTable} from '@/components/member-table';
import {useEffect, useState} from 'react';
import {getMembers, deleteMember} from '@/lib/member';



const Member = () => {
  const [dataMembers, setDataMembers] = useState<Members[]>([]);

  useEffect(() => {
    const members = getMembers();
    setDataMembers(members);
  }, []);

  const hadleDelete = (id: string) => {
    const udpatedMebers = deleteMember(id);
    setDataMembers(udpatedMebers);
  }
  return (
    <>
      <h1 className='text-2xl font-bold mb-5'>Data Anggota</h1>
      <MemberTable columns={MembersColumn} data={dataMembers} onDelete={hadleDelete}/>
    </>
  );
};

export default Member;
