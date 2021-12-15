function redeemCoupon(deviceid, couponcode) {
    var d = new Date();
    var day = d.getDay();
    couponcode = couponcode.toUpperCase();
    if (day.toString.length == 1) {
        day = "0" + day;
    }
    var month = d.getMonth();
    var year = d.getFullYear();
    var redeemdate = day + "-" + month + "-" + year;
    let request = {
        deviceId: deviceid,
        couponCode: couponcode,
        couponPartner: 'WEIKFIELD',
        type: 'REDEEM',
        redeemtionDate: redeemdate
    };
    const FETCH_TIMEOUT = 5000;
    let didTimeOut = false;
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(function () {
            didTimeOut = true;
            reject("Request timed out. Please try again.");
        }, FETCH_TIMEOUT);
        //  var url = "https://run.mocky.io/v3/8362b56e-9419-48b0-b0a6-b9e3bf5690a2";
        // var url = "https://run.mocky.io/v3/01706220-7e8f-4492-95ec-d50812e215a6";
        // var url = "https://run.mocky.io/v3/d75d70a5-4927-4656-a5f6-c0e24c89a101";
        // var url = "https://apbuat.airtelbank.com/appweb/api/coupon/integration";
        var url = "https://app.airtelbank.com:5055/api/coupon/integration";
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'key': 'ezprpyyrdd+VX44ZiXueOsp10CI8YXMy'
            },
            body: generateEncryptedKeyData(JSON.stringify(request))
        }).then((response) => {
            clearTimeout(timeout);
            if (!didTimeOut) {
                if (response.ok) { // if HTTP-status is 200-299
                    // get the response body (the method explained below)
                    let json = response.json();
                    resolve(json);
                } else {
                    reject("Something went wrong. Please try again.");
                    //alert("HTTP-Error: " + response.status);
                }
            }

        });
    });



}


