import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
// ページ遷移
import { Link, useLocation, useSearchParams, } from "react-router-dom";

const ARReader = () => {
  // IDの取得 おそらくGET
  const currentURL = window.location.href;
  console.log(currentURL);
  const queryParams = new URLSearchParams(window.location.search);
  const paramsObj = Object.fromEntries(queryParams.entries());
  var user_id = paramsObj['user_id'];
  console.log(paramsObj);
  console.log("id取得:", user_id);

  // DBからpathの取得 非同期処理注意
  const refurl = 'gs://test-arbum.appspot.com/' + user_id +'/sample.mp4';
  const storage = getStorage();
  const pathReference = getDownloadURL(ref(storage, refurl));
  console.log(pathReference)

  // pathからStorageにアクセス(今は直接アクセス)
  const markerpatternfile_path = process.env.PUBLIC_URL + "/testsrc/pattern-minari.patt";
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

export default ARReader;
