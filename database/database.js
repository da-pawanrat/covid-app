const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'dada021042',
    port: '5432',

})

async function getdata(){
    const sql = `select "Country/Region" as country,"lat" as lat,"long" as long, "3/23/20" as confirm
    from covid19_confirmed_csv 
    where "3/23/20" > 0
    order by "3/23/20" desc `
    const data = await pool.query(sql);
    //console.log(data);
    return data;

}
async function getTotal(){
    const sql =`select covid19_confirmed_csv."Country/Region" as country, covid19_confirmed_csv."Province/State" as province, covid19_confirmed_csv."3/23/20" as date_conf,covid19_death_csv."3/23/20" as date_death,covid19_recovered_csv."3/23/20" as date_recover
    from covid19_confirmed_csv , covid19_death_csv , covid19_recovered_csv
    where covid19_confirmed_csv."Country/Region"= covid19_death_csv."Country/Region" and covid19_confirmed_csv."Province/State" = covid19_death_csv."Province/State" 
    and covid19_confirmed_csv."Country/Region"= covid19_recovered_csv."Country/Region" and covid19_confirmed_csv."Province/State" = covid19_recovered_csv."Province/State"`
    const data = await pool.query(sql);
    return data;
}

async function getmap(){
    const sql = `select "Country/Region" as country,lat as latitude ,long as longtitude , "3/23/20" as confirmed
    from covid19_confirmed_csv `
    const data = await pool.query(sql);
    //console.log(data);
    return data;

}
module.exports={
    getdata,
    getTotal,
    getmap,
}