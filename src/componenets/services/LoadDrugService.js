//const apiUrl = 'http://localhost:8085/api/pdd/TSLoadDrug';
const apiUrl = window.BASE_URL + '/TSLoadDrug'

// =================   Get All  ==================
export const getAllDrug = async () => {
    const Response = await fetch(apiUrl);
    const result = Response.json();
    return result;

}