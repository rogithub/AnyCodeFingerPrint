// NOTE: make sure you import only WebSdk typings here, not a WebSdk code!
// Also make sure this is not a NodeJS module. WebSdk is a browser-only library!
import '../typings/index'
import { FingerprintReader } from '@digitalpersona/devices';

export class FingerprintSigninControl {
    private reader = new FingerprintReader(); 
    
    constructor() {
        this.reader.on("DeviceConnected", this.onDeviceConnected);
        this.reader.on("DeviceDisconnected", this.onDeviceDisconnected);
        this.reader.on("QualityReported", this.onQualityReported);
        this.reader.on("SamplesAcquired", this.onSamplesAcquired);
        this.reader.on("ErrorOccurred", this.onReaderError);
    }

    // Event handlers.
    onDeviceConnected = () => { console.log('called'); }
    onDeviceDisconnected = () => { console.log('called'); };
    onQualityReported = () => { console.log('called'); };
    onSamplesAcquired = () => { console.log('called'); };
    onReaderError = () => { console.log('called'); };
}

console.log("done!");