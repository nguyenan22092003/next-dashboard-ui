// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  //Allow access from specific domain dev
  allowedDevOrigins: [
    'arachnid-exciting-informally.ngrok-free.app',  //domain từ ngrok
    '*.ngrok-free.app',                             //wildcard nếu có nhiều subdomain
  ],
}
