// NOTE: make sure you import only WebSdk typings here, not a WebSdk code!
// Also make sure this is not a NodeJS module. WebSdk is a browser-only library!
import { FingerprintReader } from '@digitalpersona/devices';


// Event handlers.
let onDeviceConnected = () => { console.log('called'); }
let onDeviceDisconnected = () => { console.log('called'); };
let onQualityReported = () => { console.log('called'); };
let onSamplesAcquired = () => { console.log('called'); };
let onReaderError = () => { console.log('called'); };

$(async () => {
    let x = new FingerprintReader();

    x.on("DeviceConnected", onDeviceConnected);
    x.on("DeviceDisconnected", onDeviceDisconnected);
    x.on("QualityReported", onQualityReported);
    x.on("SamplesAcquired", onSamplesAcquired);
    x.on("ErrorOccurred", onReaderError);


    console.log("devices:");
    let list = await x.enumerateDevices();
    console.dir(list);

    //x.getDeviceInfo()
});

