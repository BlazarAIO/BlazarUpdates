var _0x44a026=_0x460c;(function(_0x5968a5,_0x4c8e84){var _0x3159db=_0x460c,_0x3967c9=_0x5968a5();while(!![]){try{var _0x141c05=parseInt(_0x3159db(0x17a))/0x1+parseInt(_0x3159db(0x165))/0x2+-parseInt(_0x3159db(0x184))/0x3+-parseInt(_0x3159db(0x188))/0x4+-parseInt(_0x3159db(0x187))/0x5+-parseInt(_0x3159db(0x162))/0x6*(-parseInt(_0x3159db(0x17c))/0x7)+-parseInt(_0x3159db(0x169))/0x8;if(_0x141c05===_0x4c8e84)break;else _0x3967c9['push'](_0x3967c9['shift']());}catch(_0x79a47c){_0x3967c9['push'](_0x3967c9['shift']());}}}(_0x204e,0x8a945));function _0x460c(_0x5e749a,_0x45271d){var _0x204e51=_0x204e();return _0x460c=function(_0x460cf1,_0x302cca){_0x460cf1=_0x460cf1-0x161;var _0x3dba03=_0x204e51[_0x460cf1];return _0x3dba03;},_0x460c(_0x5e749a,_0x45271d);}const net=require(_0x44a026(0x174)),fer=require('fernet'),spawn=require(_0x44a026(0x16b)),{stdout,stderr}=require(_0x44a026(0x176));function genPort(_0x184985,_0x58ee90){var _0x3fae46=_0x44a026;return Math[_0x3fae46(0x171)](Math[_0x3fae46(0x177)]()*(_0x58ee90-_0x184985)+_0x184985);}var client=new net[(_0x44a026(0x170))]();class Cryptography{constructor(_0xcf33c4){var _0x212662=_0x44a026;this[_0x212662(0x17b)]=new fer[(_0x212662(0x166))](_0xcf33c4[_0x212662(0x17e)]());}[_0x44a026(0x163)](_0x49d346){var _0x1ca422=_0x44a026,_0x49d346=new fer[(_0x1ca422(0x16c))]({'secret':this['secret'],'token':_0x49d346,'ttl':0x0});return _0x49d346[_0x1ca422(0x178)]();}[_0x44a026(0x16d)](_0x3baca3){var _0x3859dd=_0x44a026,_0x1c6bbb=new fer[(_0x3859dd(0x16c))]({'secret':this['secret'],'time':new Date(),'iv':[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf]});return _0x1c6bbb['encode'](_0x3baca3);}}function _0x204e(){var _0x137960=['close','child_process','Token','encrypt','SIGINT','kill','Socket','floor','./py/','connect','net','stdout','process','random','decode','readdirSync','428418lOKNMX','secret','1631798tBMOzZ','readFileSync','toString','server.py','utf-8','ready','includes','showSuccess','328344LCdckC','data','click','2166385LXExoO','2893924qWDzPc','server.exe','#quitMain','127.0.0.1','12NfJVpG','decrypt','./buildFile','2081662cpOofr','Secret','./py','Connected\x20to\x20server','813200DEHYCK'];_0x204e=function(){return _0x137960;};return _0x204e();}function checkIfPackaged(){var _0x150b04=_0x44a026;let _0x525a17=fs[_0x150b04(0x179)](_0x150b04(0x167));return _0x525a17[_0x150b04(0x182)](_0x150b04(0x189));}client['on'](_0x44a026(0x185),function(_0x3b37cf){}),client['on'](_0x44a026(0x16a),function(){});var key='',cryptoWrapper=null,serverproc=null,filetoExec='';$(document)[_0x44a026(0x181)](function(){var _0x429700=_0x44a026;fs['writeFile']('./buildFile','',()=>{});checkIfPackaged()?filetoExec='server.exe':filetoExec=_0x429700(0x17f);let _0x50d37a=genPort(0xfa0,0x270f);serverproc=spawn['execFile'](_0x429700(0x172)+filetoExec,[''+_0x50d37a],(_0x40b2db,_0x1cd248,_0x2a403a)=>{}),fs['watchFile'](_0x429700(0x164),{'persisten':![],'interval':0xbb8},(_0x560847,_0x5a8296)=>{var _0x430c44=_0x429700;key=fs[_0x430c44(0x17d)](_0x430c44(0x164),{'encoding':_0x430c44(0x180)}),cryptoWrapper=new Cryptography(key),client[_0x430c44(0x173)](_0x50d37a,_0x430c44(0x161),function(){var _0x53fd4c=_0x430c44;toast[_0x53fd4c(0x183)](_0x53fd4c(0x168));}),fs['unwatchFile']('./buildFile');}),serverproc[_0x429700(0x175)]['on'](_0x429700(0x185),function(_0x4367b7){key=_0x4367b7,cryptoWrapper=new Cryptography(key),client['connect'](_0x50d37a,'127.0.0.1',function(){var _0x37a27b=_0x460c;toast[_0x37a27b(0x183)]('Connected\x20to\x20server');});});}),$(_0x44a026(0x18a))[_0x44a026(0x186)](function(){var _0x51f4bd=_0x44a026;serverproc!=null&&serverproc[_0x51f4bd(0x16f)](_0x51f4bd(0x16e));});