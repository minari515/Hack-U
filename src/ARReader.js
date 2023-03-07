import React from "react";

const ARComponent = () => {
  // IDの取得 おそらくGET

  // DBからpathの取得 非同期処理注意

  // pathからStorageにアクセス(今は直接アクセス)
  const markerpatternfile_path = process.env.PUBLIC_URL + "/testsrc/pattern-marker.patt";
  const moviefile_path = process.env.PUBLIC_URL + "/testsrc/Debug.mp4";
  console.log(moviefile_path);
  console.log(markerpatternfile_path);

  return (
    <a-scene arjs="sourceWidth: window.innerWidth > window.innerHeight ? 640 : 480; sourceHeight: window.innerWidth > window.innerHeight ? 480 : 640">
      <a-assets timeout="30000">
        <video
          autoPlay
          id="movie"
          src={moviefile_path}
          loop={true}
          preload="auto"
        ></video>
        <audio src={moviefile_path} autoPlay></audio>
      </a-assets>

      {/* <a-marker preset="hiro"> */}
      <a-marker type="pattern" url={ markerpatternfile_path }>
        <a-video
          src="#movie"
          width="4.6"
          height="4.6"
          position="0 0 0"
          rotation="0 0 0"
          play="true"
        ></a-video>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARComponent;
