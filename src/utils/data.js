// src/utils/fetchData.js

export const fetchCountries = async () => {
  try {
    const response = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            {
                countries {
                  name
                  emoji
                  capital
                  currency
                  languages {
                    name
                  }
                  continent {
                    name
                  }
                }
              }          
              `,
      }),
    });
    const data = await response.json();
    return data.data.countries;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
