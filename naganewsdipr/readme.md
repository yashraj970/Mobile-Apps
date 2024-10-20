<!-- FOR BROWSER -->
npm install
ionic build
ionic cap copy
ionic cap sync
ionic s

<!-- FOR EMULATOR DEVICE -->
ionic build android
ionic cap copy

ionic cap sync
ionic cap open android
cordova-res android --skip-config --copy


<!-- LIVE Reload APP -->
ionic cap run android -l --external

/tabs/home/photo-news/
/tabs/home/naga-news/


keytool -genkey -v -keystore naga-news.keystore -alias ALIAS -keyalg RSA -keysize 2048 -validity 10000

keytool -list -v -keystore naga-news.keystore

.well-known/assetlinks.json


[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target" : { "namespace": "android_app", "package_name": "in.gov.nagaland.ipr",
               "sha256_cert_fingerprints": ["30:4D:A5:3C:94:13:2B:34:50:7D:07:A6:E0:EA:68:FB:85:7F:80:73:88:47:7C:FF:FB:B9:AC:AB:89:28:84:08"] }
}]


ng add @nguniversal/express-engine

npm install @ionic/angular-server@dev