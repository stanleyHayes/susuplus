let API_URL;
if(process.env.NODE_ENV === 'development'){
    API_URL = 'http://localhost:7000/api/v1';
}else if(process.env.NODE_ENV === 'production'){
    API_URL = 'https://susuplus.herokuapp.com/api/v1';
}

export const CONSTANTS = {API_URL};
