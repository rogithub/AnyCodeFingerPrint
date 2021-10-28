// NOTE: make sure you import only WebSdk typings here, not a WebSdk code!
// Also make sure this is not a NodeJS module. WebSdk is a browser-only library!
import { FingerprintReader, SampleFormat, SamplesAcquired } from '@digitalpersona/devices';
import { Utf8 } from '@digitalpersona/core';
// https://hidglobal.github.io/digitalpersona-devices/tutorial.html

// Event handlers.
let onDeviceConnected = () => { console.log('called'); }
let onDeviceDisconnected = () => { console.log('called'); };
let onQualityReported = () => { console.log('called'); };
let onSamplesAcquired = (data: SamplesAcquired) => {
    if (data.samples.length === 0) return;
    const x = btoa(Utf8.fromBase64Url(data.samples[0] as any));

    const sampleImageUrl = 'data:image/png;base64,' + x;
    $("#huella").attr("src", sampleImageUrl);

    FingerprintsAuth ait = new FingerprintsAuth();


    return sampleImageUrl;
};
let onReaderError = () => { console.log('called'); };

let init = async (r: FingerprintReader) => {
    try {
        await r.startAcquisition(SampleFormat.PngImage);
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

