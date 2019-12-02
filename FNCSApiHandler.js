async function launchSncfRequest(url,city) {
    const RequestApi = await fetch(url+city).catch(e=>console.log(e));
    const cityResponse = await RequestApi.json().catch(e=>console.log(e));
    return cityResponse.records.map(function (city) {
        return city.fields.gare_ut_libelle
    });
}

launchSncfRequest('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=','lill').then(function (cities) {
    document.write(cities);
});