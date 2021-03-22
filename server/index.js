const pushManager = require('web-push')

// console.log(pushManager.generateVAPIDKeys())

const publicKey = 'BBrSLCPyECboR8i2adR0VZ0qbIpY96Is0NSgSfRxZ4eYscNubEAbIVl14RbR68DTpqzznRETBDlPamZZzZ9s4Tw'
const privateKey = 'BSXTTC0NCKpaqPM_Toiyhjd7bZh35n0xp-6uhguOruE'

pushManager.setVapidDetails(
	"mailto:gimmick.data@gmail.com",
	publicKey,
	privateKey
)

const subscriber = {
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgWCp-rn5VWbEugEe1VITP3tila_rC4ORL7FpMPIXNLCmLgTEac6_pxQ53zmtKfxQFQFMBtN80t7cqucLliA0Gh8Eoj0rMUDqbWeL-T190jvvj9j7n_qwFMOo39I4yiUvKlk128eXS9e7UqTRZxEwOg74blPvNY8-0r0Sutu3-F3OYmrM",
  "keys": {
    "auth": "HL6vnJ41ZN_mZ1kJ_4S42g",
    "p256dh": "BLAcvh23nKQqqHmu3ZEdWmCB4dgKufE0vsduAzJROT8UD50MM-sX7hS2zbYzAsE7C2Aopfuir1t70TFRoN8oHGg"
  }
}

pushManager.sendNotification(subscriber, 'Assalomu alaykum!')
