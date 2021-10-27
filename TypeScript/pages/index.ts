// NOTE: make sure you import only WebSdk typings here, not a WebSdk code!
// Also make sure this is not a NodeJS module. WebSdk is a browser-only library!
import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';


// Event handlers.
let onDeviceConnected = () => { console.log('called'); }
let onDeviceDisconnected = () => { console.log('called'); };
let onQualityReported = () => { console.log('called'); };
let onSamplesAcquired = () => { console.log('called'); };
let onReaderError = () => { console.log('called'); };

let init = async (r: FingerprintReader) => {
    try {
        await r.startAcquisition(SampleFormat.Intermediate);
    } catch (err) {
        console.error(err);
    }
}

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

    list.forEach(d => {
        x.getDeviceInfo(d);
    });

    await init(x);
});

