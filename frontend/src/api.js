const API_URL = "http://localhost:4000"; 

// Function to fetch data from backend API
export const fetchData = async () => {
    try {
        const response = await fetch(`${API_URL}/`); 
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
        return null; 
    }
};
