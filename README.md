# 專案名稱 查詢天氣網頁

一個簡單的網頁應用，讓使用者輸入地點名稱並查詢當地的天氣資訊。

## 功能 Features

- 使用者可以輸入地點顯示當地目前天氣狀態 ex:Taipei
- 分頁切換資訊

## 使用技術 Tech Stack

- HTML / CSS
- JavaScript
- 天氣 API (https://api.weatherstack.com/current?access_key=‘youkey’&query=${latitude},${longitude}&units=m)
- 經緯度 API (https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(address)}&access_token=${accessToken}&limit=1)
- 部署工具 (https://vercel.com/)

## 執行方式 Getting Started
1. 開啟 https://node3-weather-website-iota.vercel.app/ （可直接用瀏覽器打開）

## 備註
- 這是一個使用 Express 建立的 Node.js 網站伺服器，用來提供天氣查詢服務
geocode.js 使用 mapbox api 負責將使用者輸入的地址與 AccessToken ，轉換成經緯度座標
forecast.js 使用經緯度搭配 API 金鑰，向 Weatherstack 查詢目前的天氣資訊
前端的部分使用 HTML、CSS 和圖片，這些靜態資源放置於 public 資料夾中，
透過 Express 的 express.static() 方法提供服務
使用.hbs好處是前後分離、維護方便動、態渲染頁面與支援模板重用
