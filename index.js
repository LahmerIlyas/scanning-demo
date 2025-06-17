/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { App } from './src';
import { ARView } from './src/routes/BarCodeScanner/components/ARView';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(ARView.moduleName, () => ARView);
