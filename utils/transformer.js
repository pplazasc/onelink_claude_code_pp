import { encode, decode } from "js-base64";

export const encodeData = (obj) => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64) => JSON.parse(decode(base64));

const ALLOWED_PROTOCOLS = ['https://', 'http://', 'mailto:', 'tel:'];

export const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim().toLowerCase();
  return ALLOWED_PROTOCOLS.some(p => trimmed.startsWith(p)) ? url.trim() : '';
};
