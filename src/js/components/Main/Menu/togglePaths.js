'use strict';

export default function togglePaths(paths) {
  paths.forEach(function(path) {
    if(path.style.strokeDashoffset > 0) {
      activePath(path);
    } else {
      deactivePath(path);
    }
  })
}

function deactivePath(path) {
  path.style.strokeDashoffset = path.getTotalLength();
}

function activePath(path) {
  path.style.strokeDashoffset = '0';
}
