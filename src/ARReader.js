import React, { useEffect, useState } from 'react'
import firebase from "./firebase";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

// ページ遷移
import { Link, useLocation, useSearchParams, } from "react-router-dom";
import { file } from '@babel/types';

const ARReader = () => {
  // IDの取得 おそらくGET
  const currentURL = window.location.href;
  const queryParams = new URLSearchParams(window.location.search);
  const paramsObj = Object.fromEntries(queryParams.entries());
  // var user_id = paramsObj['user_id'];
  var user_id = "3SFzC76qlfq9yO264F6G";

  console.log(currentURL);
  console.log(paramsObj);
  console.log("id取得:", user_id);

  // DBからpathの取得 非同期処理注意
  let file_name = []
  const storage = getStorage();
  const listFiles = async (path) => {
    const fileRef = ref(storage, path);
    const fileRefList = await listAll(fileRef);
  
    fileRefList.items.forEach((itemRef) => {
      // console.log("File name: ", itemRef.name);
      file_name[file_name.length] = itemRef.name;
    });
    
    fileRefList.prefixes.forEach((prefixRef) => {
      // console.log("Folder name: ", prefixRef.name);
      // フォルダ内のファイル名の取得
      // listFiles(prefixRef.fullPath);
    });
    console.log(user_id, "内のファイルを表示")
    console.log(file_name[0])
    console.log(file_name[1])
    console.log(file_name[2])
  };
  
  // 指定のものを探すよ
  listFiles(user_id);

  // const refurl = 'https://firebasestorage.googleapis.com/v0/b/test-arbum.appspot.com/o/' + user_id +'%2F' + file_name[2] + '?alt=media&token=1accee60-21a8-4dc7-a4ed-839c2a0d57aa';
  // const markerpatternfile_path = 'https://firebasestorage.googleapis.com/v0/b/test-arbum.appspot.com/o/' + user_id +'%2F' + file_name[0] + '?alt=media&token=47239d1f-e756-4498-b35b-1edef8a44dd5';
  
  var moviefile_path = "https://firebasestorage.googleapis.com/v0/b/test-arbum.appspot.com/o/TzxJ9ox39PmW84TgS19x%2FDebug_sax.mp4?alt=media&token=15f967f7-cae9-48d2-bf1b-a5b46cce5481";
  // const videotag = document.getElementById("video");
  // const [moviefile_path, setMoviePath] = useState(refurl);
  // const pathReference = getDownloadURL(ref(storage, refurl));

  // テスト用
  const videotag = document.getElementById("video");
  // const markerpatternfile_path = process.env.PUBLIC_URL + "/testsrc/pattern-Debugmarker.patt";
  // const [moviefile_path, setMoviePath] = useState(process.env.PUBLIC_URL + "/testsrc/Debug.mp4");
  
  // pathからStorageにアクセス
  // const markerpatternfile_path = user_id + "/" + file_name[0]
  // const moviefile_path = user_id + "/" + file_name[2]
  const markerpatternfile_path = user_id + "/ARmarker.patt";
  // const moviefile_path = user_id + "/ARmarker.mp4";
  const pattRef = ref(storage, markerpatternfile_path);
  const movieRef = ref(storage, moviefile_path);
  console.log("")
  console.log(markerpatternfile_path)
  console.log(moviefile_path)
  console.log(pattRef)
  console.log(movieRef)
  console.log("")

  getDownloadURL(movieRef).then((url) => {
    console.log("getDownloadURL: " + url);
    // moviefile_path = url;
    // setMoviePath(url)
    console.log("DownloadURL取得完了");
    videotag.src = url;
  })
  .catch((error) => {
    console.log("getDowinloadERR");
    console.log(error);
    // Handle any errors
  });

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

      <a-marker preset="hiro">
      {/* <a-marker type="pattern" url={ markerpatternfile_path }> */}
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
