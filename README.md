# OneSignal & SurveyCake Test App

## 簡介

OneSignal & SurveyCake Test App 是一個用來示範如何整合 OneSignal (推播服務) 與 SurveyCake (線上問卷) 這兩套主流的 SaaS 服務的測試 App

## 編譯環境

- iOS 14+
- Android 10+

## 安裝方式

**下載專案**

[Release](https://github.com/weichiangko/mionext-cx-app/releases)

**環境建置**

1. 安裝 [Node.js](https://nodejs.org/en/) (已安裝可略過)
2. 安裝所有 node modules

```
npm install
```

3. 設定好 OneSignal App ID (取得 App ID 方式可參考[官方說明](https://documentation.onesignal.com/docs/accounts-and-keys))

```JavaScript
// App.js

const App = () => {
  OneSignal.setAppId("YOUR_APP_ID");

  ...

  return (
  
    ...
    
  );
};
```
