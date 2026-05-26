import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

const viewer = new GaussianSplats3D.Viewer({
  cameraUp: [0, -1, 0],
  initialCameraPosition: [-1, -4, 6],
  initialCameraLookAt: [0, 0, 0],
  rootElement: document.getElementById('app'),
  selfDrivenMode: true,
});

viewer.addSplatScene('./scene.splat', {
  streamView: true,
  showLoadingUI: true,
}).then(() => {
  viewer.start();
});