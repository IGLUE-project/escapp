const queries = require("../queries");
const {models} = require("../models");
const {fuzzy} = require("fast-fuzzy");
const urls = JSON.parse(process.env.URLS) || [];

const getResultsFromInstance = async (value, before, after, lang, page=1, limit=10) => {
    try{
        let queryToExecute = queries.escapeRoom.text(before, after, lang);
        let results = await models.escapeRoom.findAll(queryToExecute);
        //Fuzzy finding of escaperooms
        results = results.sort((a, b) => -fuzzy(value, a.title) - fuzzy(value, a.description)*0.7 + fuzzy(value, b.title) + fuzzy(value, b.description)*0.7);
        results = results.slice((page-1)*limit, page*limit);
        return results;
    } catch (error) {
        console.error(`Error getting local results: `, error);
        return {};
    }
}

exports.searchInInstance = async (req, res, next) => { //Busqueda local
    try {
        const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
        if(Math.random() < 0.5){
            console.log("Simulating delay...");
            await wait(1000);
        }
        let {query, before, after, lang, page, limit} = req.query || {};
        const results = await getResultsFromInstance(query, before, after, lang, page, limit);
        res.json(results);

    } catch (error) {
        console.error(error);
        next(error);
    }
}

exports.renderSearch = (req, res) => {
    res.render("network/search", {user: req.user});
}


//Promesa que si no se resuelve en X tiempo, rechaza
// Esta se usa para el fetch, si el fetch falla, rechaza, si se resuelve, limpia el timeout y resuelve con el json
// Si el json no es json correcto, rechaza, si no devuelve el json
const timeoutPromise = (timeout, ogPromise) =>  {
    return new Promise((resolve, reject) => {

        const timer = setTimeout(() => { //Timer
            reject("Fetch timout");
            console.warn("Request timed out");
        }, timeout);

        ogPromise.then( //Fetch original
            async (val)=>{ //Si se resuelve
                clearTimeout(timer);
                if(val && val.ok){
                    try{
                        let data = await val.json();
                        resolve(data);
                    }catch(error){
                        console.error("Error parsing JSON:", error);
                        reject(error);
                    }
                }else{
                    reject("Fetch error");
                }
            },
            (error)=>{clearTimeout(timer);reject(error)} //Si falla
        );
    });
}


const tryFetch = async (url) => { //El fetch falla si no hay nadie, wrapper
    console.log(`Fetching from ${url}`);
    try {
        const response = await fetch(url);
        return response;
    } catch (error) {
        console.error(`Error fetching from ${url}: ${error.message}`);
        return null;
    }
}

exports.searchInNetwork = async (req, res, _) => { //Busqueda en la red, tira querys contra el resto de instancias y agrega
    const {query, before, after, lang, page, limit} = req.query;
    const aggregated = [];
    const promises = [];

    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //TODO: BORRAR ESTO QUE ES SOLO PARA TESTING
    let urls = ["http://localhost:3000", "http://localhost:3000"]
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    const localR = await getResultsFromInstance(query, before, after, lang, page, limit)
    console.log(localR);
    localR.forEach(r => aggregated.push(r));

    for (let index in urls){
        const url = urls[index];
        try {
            promises.push(timeoutPromise(5000, tryFetch(`${url}/network/searchInInstance?query=${encodeURIComponent(query)}&before=${before || ""}&after=${after || ""}&lang=${lang || ""}`)))
        } catch (error) {
            console.error(`Error fetching from ${url}: ${error.message}`);
        }
    }

    let values = await Promise.allSettled(promises); //All a secas termina si una falla
    console.log(values);

    for (let i = 0; i < values.length; i++){
        const data = values[i];
        if(data.status === "fulfilled"){
            data.value.forEach(v => {
                aggregated.push(v);
            })
        }
    }

    console.log(aggregated);
    res.json(aggregated);
}
