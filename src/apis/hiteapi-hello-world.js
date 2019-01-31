import request from './request';

export default async () => {
  const response = await request(`http://example.hiteapi.org/greetings/1`);
  return response.data.entity;
}
