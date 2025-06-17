import React, { Component } from 'react';
import { AppState, BackHandler, Dimensions, SafeAreaView } from 'react-native';
import {
  BarcodeTracking,
  BarcodeTrackingAdvancedOverlay,
  BarcodeTrackingBasicOverlay,
  BarcodeTrackingBasicOverlayStyle,
  BarcodeTrackingScenario,
  BarcodeTrackingSettings,
  Symbology,
} from 'scandit-react-native-datacapture-barcode';
import {
  Anchor,
  Camera,
  DataCaptureContext,
  DataCaptureView,
  FrameSourceState,
  MeasureUnit,
  NumberWithUnit,
  PointWithUnit,
  Quadrilateral,
  VideoResolution,
} from 'scandit-react-native-datacapture-core';

import { ARView } from './components/ARView';
import { requestCameraPermissionsIfNeeded } from './camera-permission-handler';
import Freeze from './Freeze.svg';
import { styles } from './styles';
import Unfreeze from './Unfreeze.svg';

// Calculate the width of a quadrilateral (barcode location) based on it's corners.
Quadrilateral.prototype.width = function() {
  return Math.max(
    Math.abs(this.topRight.x - this.topLeft.x),
    Math.abs(this.bottomRight.x - this.bottomLeft.x),
  );
};

export class BarCodeScannerRoute extends Component {
  constructor(props) {
    super(props);

    // Enter your Scandit License key here.
    // Your Scandit License key is available via your Scandit SDK web account.
    this.dataCaptureContext = DataCaptureContext.forLicenseKey('AhUm7C6eCCN7N/tpwuuzNhsd22dFN7WNhhwW4+smyyEGTZoAGmWaxKNhCkX0S0Adj1i/MXJwctf1cnc3dDCxcPp2e5wWOHjo8idDWLQRemEtGE3qxRrVYFhA67PKbfsevVAGN3hcf9Mfckjs5F1PTvBf0GXrOj7Z5EI7MctGw7UDTjmbdDRQTN8Nisk2UrOc3X0iK/BlBna/F4vyEUsj7uwYmeMPQ2To2UHXCzBJYpnIdRgLD1b3NwQvMHfbSbno6k+5rR9fVdWUcTRe8Uah9WJGnpNoHA9oUQ/hujNvzotRAbtRS03Wm7UwYV2+KDk/70a3UKROFJAGW6OGE3OhMk18e5OwV6yPVHj44pI/Tk4EFmRJghTqFLwlUdu1aIpTzFE/OHZE7Tr+J8uWEWp9kslwZ7IMXqJ6DWUgRLBTLxcDac/4fHl+jFMY+NqDXO7j/V0h6Z57MQu4caDRrnFx525VynU1Slm/6SSTrEVQTPL1ZNoChR5xzDN/Re8pZdW8EGJ0I7ZtnklkbKcmRFx8YlQRQ9UIcJTpYV2DFkkpudIzIzBdkXqXEVV+SPl1Y9l2qgf31eFhHP+WZu9N43nTnEFr5RsjaQosyFCesj1VIL5qZjUJTGiY1uEvQMroer2jJVzEOCl1BvywL+JIQH/5aGVSALG3ZS61m0uzzs5un2ZDMUK+sFjuV7wPLQ5PcgoyZ17Hla1tN/wAPsJlAHml2mJH+NmMewUZ3gHLdDdYltZ+cyzTA2VJsBdNVl4lZXZnaVAzBwZaZEKBfDvmxWip3idl53j+cHFXNU1rj+UuGcb/AMcDkEa1aj8pGBbjScI+IlwZ0MVSWNqFTbwZMUbCYp1qNMHaWgEfrRD8GnVAeSHsLhzp7yPNEfUc1LigK0ASIkEmGVIJT/ZJWOC1UGD1lBBRKLNnaDF52QcbBcNEVXmuKOqOGWSajRNWvUpPRg95JnRnwIFBJA6aFddafXsgkxR/3afsQ5EGhx1uLJLPNrhECpZdl/vEFK8GDQP0Xq/I13P9jufPNZ7wcv+213oYhYbVspeqoVv1IP00SRM+zavcpEdFEiFfxnYPDQ2kVSeIQSw2//sZNJ4uPCF896Bq/zh4Un4HycdEfKibSRr/Vybbwcm4wu9cVJ8gNzbiz1zRRJaiztBM/OLcZntchccMSQBOBRjgenfZ7yINPPsWW9X9gr6jkkzsTtZWcs7WCuanO6odlL4VXvbXlCiRgFPUSgYcHZDz8URSlkRVdqNcJv9RpEkQtFzyVOcz39mcDg6uHdPIX1qN6N/Wmws6vOhoshRzpUf+locQCv2ywPJOs4Cs1SWbQeVyTxvfflu0Yn7Y4i3FjpA5M8bj9X9fz+JZv96FehvnEGXwNtvGOR1QImKmMGt6rKM0PzmUpX7h041WN+N4XcqM4iVTjjwJVHrBvTh5LnUIdj5IfPPHHeri8R1BkGDVqh/d7z0hDRdkzClEbx9oEEzqTmMA6psSwNYfsKNp5eeOBapjMbE24buKAq7dESIJJztcrSpfj3sbtQFhN3TleFPBGs/fxWx1ErFUn22hkfuFjJrGJROHv9r/PKUOew8JfUcRgZpQti3k3X40iryIRsNGzpSOsBeSCk0fLVg9JJ+CSh6QslVTnXunva72oEr4Rt/iy+eAYZC+OOZdrIcxSKym');

    this.viewRef = React.createRef();

    this.trackedBarcodes = {};
    this.state = { scanning: true };
  }

  componentDidMount() {
    this.handleAppStateChangeSubscription = AppState.addEventListener('change', this.handleAppStateChange);
    this.setupScanning();
    this.startCapture();
  }

  componentWillUnmount() {
    this.handleAppStateChangeSubscription.remove();
    this.dataCaptureContext.dispose();
  }

  handleAppStateChange = async (nextAppState) => {
    if (nextAppState.match(/inactive|background/)) {
      this.stopCapture();
    } else if (this.state.scanning) {
      this.startCapture();
    }
  };

  startCapture() {
    this.startCamera();
    this.barcodeTracking.isEnabled = true;
  }

  stopCapture() {
    this.barcodeTracking.isEnabled = false;
    this.stopCamera();
  }

  stopCamera() {
    if (this.camera) {
      this.camera.switchToDesiredState(FrameSourceState.Off);
    }
  }

  startCamera() {
    if (!this.camera) {
      // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
      // default and must be turned on to start streaming frames to the data capture context for recognition.
      const cameraSettings = BarcodeTracking.recommendedCameraSettings;
      cameraSettings.preferredResolution = VideoResolution.UHD4K;

      this.camera = Camera.withSettings(cameraSettings);
      this.dataCaptureContext.setFrameSource(this.camera);
    }

    // Switch camera on to start streaming frames and enable the barcode tracking mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    requestCameraPermissionsIfNeeded()
      .then(() => this.camera.switchToDesiredState(FrameSourceState.On))
      .catch(() => BackHandler.exitApp());
  }

  setupScanning() {
    // The barcode tracking process is configured through barcode tracking settings
    // which are then applied to the barcode tracking instance that manages barcode tracking.
    const settings = BarcodeTrackingSettings.forScenario(BarcodeTrackingScenario.A);

    // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
    // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
    // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
    settings.enableSymbologies([
      Symbology.EAN13UPCA,
      Symbology.EAN8,
      Symbology.UPCE,
      Symbology.Code39,
      Symbology.Code128,
    ]);

    // Create new barcode tracking mode with the settings from above.
    this.barcodeTracking = BarcodeTracking.forContext(this.dataCaptureContext, settings);

    // Register a listener to get informed whenever a new barcode is tracked.
    this.barcodeTrackingListener = {
      // This function is called whenever objects are updated and it's the right place to react to the tracking results.
      didUpdateSession: (barcodeTracking, session) => {
        // Remove information about tracked barcodes that are no longer tracked.
        session.removedTrackedBarcodes.forEach((identifier) => {
          this.trackedBarcodes[identifier] = null;
        });

        // Update AR views
        Object.values(session.trackedBarcodes).forEach((trackedBarcode) => {
          this.viewRef.current.viewQuadrilateralForFrameQuadrilateral(trackedBarcode.location)
            .then((location) => this.updateView(trackedBarcode, location));
        });
      },
    };

    this.barcodeTracking.addListener(this.barcodeTrackingListener);

    // Add a barcode tracking overlay to the data capture view to render the tracked barcodes on top of the video
    // preview. This is optional, but recommended for better visual feedback. The overlay is automatically added
    // to the view.
    BarcodeTrackingBasicOverlay.withBarcodeTrackingForViewWithStyle(
      this.barcodeTracking,
      this.viewRef.current,
      BarcodeTrackingBasicOverlayStyle.Dot
    );

    // Add an advanced barcode tracking overlay to the data capture view to render AR visualization on top of
    // the camera preview.
    this.advancedOverlay = BarcodeTrackingAdvancedOverlay.withBarcodeTrackingForView(
      this.barcodeTracking,
      this.viewRef.current,
    );

    this.advancedOverlay.listener = {
      // The offset of our overlay will be calculated from the center anchoring point.
      anchorForTrackedBarcode: () => Anchor.TopCenter,
      // We set the offset's height to be equal of the 100 percent of our overlay.
      // The minus sign means that the overlay will be above the barcode.
      offsetForTrackedBarcode: () => new PointWithUnit(
        new NumberWithUnit(0, MeasureUnit.Fraction),
        new NumberWithUnit(-1, MeasureUnit.Fraction),
      ),
    };
  }

  updateView(trackedBarcode, viewLocation) {
    // If the barcode is wider than the desired percent of the data capture view's width, show it to the user.
    const shouldBeShown = viewLocation.width() > Dimensions.get('window').width * 0.1;

    if (!shouldBeShown) {
      this.trackedBarcodes[trackedBarcode.identifier] = null;
      return;
    }

    const barcodeData = trackedBarcode.barcode.data;

    // The AR view associated with the tracked barcode should only be set again if it was changed,
    // to avoid unnecessarily recreating it.
    const didViewChange = JSON.stringify(this.trackedBarcodes[trackedBarcode.identifier]) !== JSON.stringify(barcodeData);

    if (didViewChange) {
      this.trackedBarcodes[trackedBarcode.identifier] = barcodeData;

      const props = {
        barcodeData,
        // Get the information you want to show from your back end system/database.
        stock: { shelf: 4, backRoom: 8 },
      };

      this.advancedOverlay
        .setViewForTrackedBarcode(new ARView(props), trackedBarcode)
        .catch(console.warn);
    }
  }

  toggleScan = () => {
    const isScanning = this.barcodeTracking.isEnabled;

    // Toggle barcode tracking to stop or start processing frames.
    this.barcodeTracking.isEnabled = !isScanning;
    // Switch the camera on or off to toggle streaming frames. The camera is stopped asynchronously.
    this.camera.switchToDesiredState(isScanning ? FrameSourceState.Off : FrameSourceState.On);
    this.setState({ scanning: this.barcodeTracking.isEnabled });
  };

  render() {
    return (
      <>
        <DataCaptureView style={styles.dataCaptureView} context={this.dataCaptureContext} ref={this.viewRef} />
        <SafeAreaView style={styles.toggleContainer}>
          {this.state.scanning ? <Freeze onPress={this.toggleScan} /> : <Unfreeze onPress={this.toggleScan} />}
        </SafeAreaView>
      </>
    );
  }
}
