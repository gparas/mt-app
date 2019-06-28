async function fetchData(endpoint) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(res.status);
  }

  const data = await res.json();
  return data;
}

export default fetchData;
