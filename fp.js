// NOTE: make sure you import only WebSdk typings here, not a WebSdk code!
// Also make sure this is not a NodeJS module. WebSdk is a browser-only library!
import './modules/WebSdk';

import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';

class FingerprintSigninControl {
    function init() {
    this.reader = new FingerprintReader();
    this.reader.on("DeviceConnected", this.onDeviceConnected);
    this.reader.on("DeviceDisconnected", this.onDeviceDisconnected);
    this.reader.on("QualityReported", this.onQualityReported);
    this.reader.on("SamplesAcquired", this.onSamplesAcquired);
    this.reader.on("ErrorOccurred", this.onReaderError);
}

    // Event handlers.
    private onDeviceConnected = (event) => { console.log('called'); }
    private onDeviceDisconnected = (event) => { console.log('called'); };
    private onQualityReported = (event) => { console.log('called'); };
    private onSamplesAcquired = (event) => { console.log('called'); };
    private onReaderError = (event) => { console.log('called'); };
}