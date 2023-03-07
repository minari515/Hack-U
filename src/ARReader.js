
import React from "react";

const ARComponent = () => {
  // IDの取得

  // DBからpathの取得

  // pathからStorageにアクセス

  return (
    <a-scene arjs="sourceWidth: window.innerWidth > window.innerHeight ? 640 : 480; sourceHeight: window.innerWidth > window.innerHeight ? 480 : 640">
      <a-marker preset="hiro">
        <a-box
          position="0 0.5 0"
          material="opacity: 0.5; side: double;color:blue;"
        >
          <a-torus-knot
            radius="0.26"
            radius-tubular="0.05"
            animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
          ></a-torus-knot>
        </a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
      );
}

export default ARComponent;