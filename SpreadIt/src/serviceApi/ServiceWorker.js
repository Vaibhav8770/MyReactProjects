import http from './http-common'

const get= (id)=>{
    return http.get(`perfume/${id}`);
};

const getAll= ()=>{
    return http.get(`perfume`);
};

const update= (id,data)=>{
    return http.put(`perfume/${id}`,data);
};

const create= (data)=>{
    return http.post(`perfume`,data)
};

const findByName= (title)=>{
    return http.get(`/perfume?title=${title}`);
};

export default {get, getAll, update, create, findByName}