import { MAX_LENGTHS } from '@/constants';

export const phoneValidate = phone => {
  return phone && phone.length <= MAX_LENGTHS;
};
