let ss = "ss://BASE64dsadsadasd@46.249.49.193:48979"

function ssParse(line) {
    let content = line.split('ss://')[1];
    const proxy = {
        name: decodeURIComponent(line.split('#')[1]),
        type: 'ss',
    };
    content = content.split('#')[0];
    const serverAndPort = content.match(/@([^/]*)(\/|$)/)[1];
    const portIdx = serverAndPort.lastIndexOf(':');
    proxy.server = serverAndPort.substring(0, portIdx);
    proxy.port = Number(serverAndPort.substring(portIdx + 1));
    let userINFO = content.split('@')[0]
    let buff = new Buffer(userINFO, 'base64');
    let userInfo = buff.toString('ascii');
    proxy.cipher = userInfo.split(':')[0];
    proxy.password = userInfo.split(':')[1];
    const idx = content.indexOf('?plugin=');
    return proxy;
}

let parsed = parse(ss)
let rustJSON = 
{
    "servers": [
      {
          "address": parsed.server,
          "port": parsed.port,
          "password": parsed.password,
          "method":parsed.cipher,
          "timeout": 86400
      }
    ],
    "mode":"tcp_and_udp",
    "local_port":1080,
    "local_address": "127.0.0.1",
    "fast_open": true
}
console.log(JSON.stringify(rustJSON));