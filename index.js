import fs from "fs";
import { createProxyServer } from "httpxy";

const proxyServer = createProxyServer({
    target: {
        host: 'localhost',
        port: 8282
      },
      ssl: {
        key: fs.readFileSync('127.0.0.1+7-key.pem', 'utf8'),
        cert: fs.readFileSync('127.0.0.1+7.pem', 'utf8')
      }
});

proxyServer.listen(4343)