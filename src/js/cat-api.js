const url = 'https://api.thecatapi.com/v1';
const api_key = "live_X0FQQwuQQQB9OTdYFlA1OANI678ENk5EZwXMPyPWuAWxEO7e4DdwY2pYpwdFTN6u";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};