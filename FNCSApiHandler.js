async function launchSncfRequest() {
    const RequestApi = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=lill').catch();
    const cityResponse = await RequestApi.json().catch();
    return cityResponse.records.map(function (city) {
        return city.fields.gare_ut_libelle
    });
}

launchSncfRequest().then(function (cities) {
    document.write(cities);
});