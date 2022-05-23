const getLatLonInfos = async (city) => {
  console.log(`/findLatLonInfos?city=${city}`);
  const response = await fetch(`/findLatLonInfos?city=${city}`);
  try {
    return await response.json();
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export  { getLatLonInfos };
