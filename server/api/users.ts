export default async () => {
  const conf = useRuntimeConfig();
  const response = await fetch(`${conf.apiUrl}/users`);
  // @ts-ignore
  const json = await response.json();
  return json.result;
};
