const publicIp = require('public-ip'),
    CloudFlareAPI = require('cloudflare4'),
    api = new CloudFlareAPI({
        email: process.env.EMAIL,
        key: process.env.API_KEY
    }),
    minutes = process.env.UPDATE_TIME,
    the_interval = minutes * 60 * 1000;

setInterval(function () {
    publicIp.v4().then(ip => {
        api.zoneGetAll({
            name: process.env.ZONE
        }).then(function (zone) {
            api.zoneDNSRecordGetAll(zone[0].id, {
                name: process.env.RECORD
            }).then(function (record) {
                api.zoneDNSRecordUpdate(zone[0].id, record[0].id, {
                    type: 'A',
                    content: ip
                }).then(function (result) {
                    console.log(result);
                })
            })
        });
    });
}, the_interval);
