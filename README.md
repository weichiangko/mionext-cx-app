# OneSignal & SurveyCake Test App

## 簡介

OneSignal & SurveyCake Test App 是一個用來示範如何整合 OneSignal (推播服務) 與 SurveyCake (線上問卷) 這兩套主流的 SaaS 服務的測試 App。

## 編譯環境

- iOS 14+
- Android 10+

## 安裝方式

### 下載專案

[Release](https://github.com/weichiangko/mionext-cx-app/releases)

### 環境建置

**1. 安裝 [Node.js](https://nodejs.org/en/)**

已安裝可略過

**2. 安裝 node modules 與 OneSignal SDK**

2.1 安裝所有 node modules

```
npm install
```

2.2 安裝 OneSignal SDK

**3. 設定好 OneSignal App ID**

3.1 取得 App ID 方式可參考[官方說明](https://documentation.onesignal.com/docs/accounts-and-keys)
3.2 將 App ID 加入專案中

```JavaScript
// App.js

const App = () => {
  OneSignal.setAppId("YOUR-ONESIGNAL-APP-ID");

  ...

  return (

    ...

  );
};
```

**4. 設定 iOS Push Certificate**

4.1 須先設定 `bundleIdentifier`

```JavaScript
// app.json

{
    "expo": {

        ...

        "ios": {
            "bundleIdentifier": "SETUP-BUNDLE-ID"
        }

        ...

    }
}

```

4.2 產生 Certificate 並上傳至 OneSignal

[設定方式說明](https://documentation.onesignal.com/docs/generate-an-ios-push-certificate)

**5. 設定 Android Firebase Credentials**

[設定方式說明](https://documentation.onesignal.com/docs/generate-a-google-server-api-key)
