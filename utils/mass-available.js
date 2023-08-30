const fetch = require("node-fetch")

let protcol = "https"
let host = "login.cpplus.pw"
let endpoint = "/manager/updateavailablity"
let sessionKey = ""

const defaultItems = [110,113,119,120,122,123,124,126,127,128,132,180,180,181,190,195,220,227,233,234,244,245,254,255,266,268,276,277,278,293,301,302,308,309,313,315,316,321,327,329,340,347,364,367,372,432,458,461,462,463,472,475,476,477,479,489,658,659,665,666,671,675,676,701,702,703,711,712,715,720,721,722,726,727,729,760,761,762,763,765,766,767,768,771,772,786,787,788,789,834,835,842,918,920,958,987,992,993,995,998,1009,1010,1011,1012,1015,1016,1023,1024,1025,1036,1056,1057,1076,1077,1078,1079,1101,1102,1106,1114,1115,1116,1117,1199,1215,1336,1337,1338,1508,1509,1510,1511,1906,1907,2003,2004,2016,2017,2043,3002,3005,3008,3029,3036,3037,3038,3041,4004,4012,4013,4014,4015,4018,4021,4036,4037,4038,4039,4053,4054,4085,4086,4089,4090,4091,4110,4111,4112,4113,4114,4115,4116,4135,4136,4137,4138,4143,4144,4146,4190,4191,4192,4194,4204,4280,4297,4299,4347,4348,4349,4350,4455,4456,4457,4466,4467,4468,4474,4475,4476,4477,4478,4479,4480,4481,4482,4483,4484,4757,4758,4759,4760,5003,5014,5018,5021,5021,5044,5046,5047,5048,5063,5064,5066,5091,5092,5093,5094,5131,5136,5188,5189,5471,5472,5473,5474,5580,6008,6010,6011,6013,6033,6034,6095,6096,9002,9005,9027,9039,9047,9056,9120,24191,24204,24042]

let availabitity = true
let items = [...defaultItems]

process.argv.forEach((val, index) => {
    switch (val) {
        case '-i':
        case '--items':
            items = process.argv[index + 1].split(',')
            break
        case '-p':
        case '--protcol':
            protcol = process.argv[index + 1]
            break
        case '-h':
        case '--host':
            host = process.argv[index + 1]
            break
        case '-e':
        case '--endpoint':
            endpoint = process.argv[index + 1]
            break
        case '-s':
        case '--sessionkey':
            sessionKey = process.argv[index + 1]
            break
        case '-a':
        case '--availabitity':
            availabitity = process.argv[index + 1]
            break
    }
})

if (!sessionKey) {
    console.error("Session key is required")
    return
}

items.forEach(async item => {
    await fetch(`${protcol}://${host}${endpoint}`, {
        method: "POST",
        headers: {
            cookie: `sessionKey=${sessionKey}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            item: item,
            available: availabitity.toString()
        })
    })
})

