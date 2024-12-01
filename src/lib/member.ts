import {MemberFormSchema} from '@/components/member-form';
import {z} from 'zod';
import {Members} from '@/lib/member-column';
import { v4 as uuidv4 } from 'uuid';

export const addMember = (
  newMember: z.infer<typeof MemberFormSchema>
) => {
  const existingMembers = localStorage.getItem('memberData');
  const members = existingMembers ? JSON.parse(existingMembers) : [];

  const memberWithId = {...newMember, id: uuidv4()};
  members.push(memberWithId);

  localStorage.setItem('memberData', JSON.stringify(members));
};

export const getMembers = () => {
  const existingMembers = localStorage.getItem('memberData');
  return existingMembers ? JSON.parse(existingMembers) : [];
};

export const deleteMember = (id: string): Members[] => {
  const existingMembers = localStorage.getItem('memberData');
  const members = existingMembers ? JSON.parse(existingMembers) : [];
  console.log(id)
  console.log(members.id)

  const updatedMembers = members.filter((member: Members) => member.id !== id);

  localStorage.setItem('memberData', JSON.stringify(updatedMembers));

  return updatedMembers;
};
