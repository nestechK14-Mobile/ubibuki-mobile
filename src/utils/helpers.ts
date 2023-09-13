import { PHONE_REGEX, TEXT_LENGTH } from '@constants/common';

export const validatePhone = (phone: string) => {
  return PHONE_REGEX.test(phone);
};
