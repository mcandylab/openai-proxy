import express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware';

const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://api.openai.com',
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
