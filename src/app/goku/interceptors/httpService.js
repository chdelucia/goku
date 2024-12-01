// services/httpService.js

const fetchWithQueryParams = async (url, options = {}) => {

    const queryParams = new URLSearchParams({
      limit: '60',
      ...options.params, 
    });
  
    const finalUrl = `${url}&${queryParams.toString()}`;
  

    const response = await fetch(finalUrl, {
      ...options,
    });
  
    if (!response.ok) {
      throw new Error('Error fetching the data');
    }

    return response;
  };
  
  export default fetchWithQueryParams;
  