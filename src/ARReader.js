// import storage from "./firebase";
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';;
// import 'aframe';
// import { ARjs } from 'aframe-ar';

import React, { useRef } from 'react';
import 'aframe';
import 'aframe-ar';

function ARReader() {
  const arRef = useRef();
  console.log("デバッグ")
  
  return (
    // <body style="margin: 0px; overflow: hidden;">
    <div>
        <p>あ</p>
        <a-scene embedded arjs='sourceType: webcam;'>

          {/* <a-assets timeout="30000">
            <video id="video_namahage" autoPlay src="sample.mp4" loop={true} preload="auto"></video>
            {/* <!-- <video id="ar-video" autoplay loop="true" preload="auto" src="test0818.mp4"></video> --> */}
            {/* <audio src="sample.mp4" autoPlay></audio> */}
          {/* </a-assets>  */}

          <a-marker type="pattern" url="pattern-test.patt" registerevents>
          {/* <!-- <a-marker type="pattern" url="pattern-marker.patt" registerevents> --> */}
          <a-box position="0 -1 0" scale="1 1 1" color="grey"></a-box>
          {/* <a-video src="#video_namahage" width="4.6" height="4.6" position="0 0 0" rotation="0 0 0" play="true"></a-video> */}
          </a-marker>
          {/* <a-marker-camera
            ref={arRef}
            type='pattern'
            url="pattern-test.patt"
            >
          </a-marker-camera> */}

          {/* <a-box position='0 0.5 0' material='color: red;'></a-box> */}
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    // </body>
  );
}

export default ARReader;


// function ARReader() {
//   const videoRef = useRef();
//   const canvasRef = useRef();
//   const arjsRef = useRef();

//   useEffect(() => {
//     // カメラの初期化
//     const cameraParamUrl = './camera_para.dat';
//     const artoolkitProfileUrl = './ARToolKitNFT';

//     const arjs = new ARjs({
//       sourceType: 'webcam',
//       trackingMethod: 'best',
//       detectionMode: 'mono_and_matrix',
//       matrixCodeType: '3x3',
//       canvasWidth: 640,
//       canvasHeight: 480,
//       debugUIEnabled: false,
//       maxDetectionRate: 30,
//       detectionRetryEnabled: true,
//       detectionRetryCount: 5,
//       assetsPath: './assets',
//       // NFTの設定
//       nftMarker: {
//         type: 'pattern',
//         url: 'path/to/nft-marker.patt',
//         smooth: 1.0,
//         // マーカーのサイズを設定
//         size: 1,
//       },
//     });

//     arjsRef.current = arjs;

//     // カメラを起動する
//     arjs.init(videoRef.current).then((cameraParam) => {
//       console.log('カメラの起動に成功しました。');
//       // NFTマーカーをロードする
//       const nftMarkerUrl = './nft-marker.patt';
//       const nftMarkerId = 1;
//       arjs
//         .loadNFTMarker(nftMarkerUrl, nftMarkerId, 200)
//         .then((marker) => {
//           console.log('NFTマーカーのロードに成功しました。');
//         })
//         .catch((error) => {
//           console.log('NFTマーカーのロードに失敗しました。', error);
//         });
//     });

//     // カメラの映像をキャンバスに描画する
//     function render() {
//       requestAnimationFrame(render);
//       if (arjsRef.current) {
//         arjsRef.current.renderOn(canvasRef.current);
//       }
//     }
//     render();

//     return () => {
//       // カメラを停止する
//       arjsRef.current?.dispose();
//       arjsRef.current = undefined;
//     };
//   }, []);

//   return (
//     <div>
//       <a-scene>
//         <ARjs>
//           <a-marker-camera preset="hiro"></a-marker-camera>
//         </ARjs>
//       </a-scene>
//       <video ref={videoRef} style={{ display: 'none' }} />
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }


// const ARReader = () => {
//   // ビデオ格納用の変数定義を追加
//   {/* <!-- A-Frame --> */}
//   // SCRIPTタグの生成
//   var aframe = document.createElement("script");
//   aframe.src="https://aframe.io/releases/1.0.0/aframe.min.js";
//   // document.body.appendChild(aframe);
  
//   {/* <!-- AR.js --> */}
//   // SCRIPTタグの生成
//   var arjs = document.createElement("script");
//   arjs.src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.7.7/aframe/build/aframe-ar.js"
  
//   // IDの指定
//   var id = 'sAwXkaOBcxv7eXwolZYJ'
  
//   /* 取得した画像のURLを保存する場所 */
//   const [imageUrl, setImageUrl] = useState();
  
//   const get = async () => {
//     const storageRef = storage.ref('gs://test-arbum.appspot.com/' + id);
//     const url = await storageRef.getDownloadURL();
//     setImageUrl(url);
//     console.log(url)
//   }
  
//   console.log(id)
//   console.log("testdesu");
//   var video = null;
//   // aframe.registerComponent('registerevents', {
//   //   init: function () {
//   //     console.log("関数定義中？");


//   //     var marker = this.el;

//   //     // マーカーを検出したイベントの登録
//   //     marker.addEventListener('markerFound', function () {
//   //       console.log('markerFound');
//   //       // マーカー認識したら、ビデオ再生
//   //       if (video == null) {
//   //         video = document.querySelector('#video_namahage');
//   //       }
//   //       video.play();
//   //     });

//   //     // マーカーを見失ったイベントの登録
//   //     marker.addEventListener('markerLost', function () {
//   //       console.log("markerLost");
//   //       // マーカー認識が外れたら、、ビデオ停止
//   //       video.pause();
//   //     });
//   //   }
//   // });

//   console.log("関数登録完了" + video);

//   return (
//     <div>
//       <p>{get()}</p>

//       <body style="margin: 0px; overflow: hidden;">
//         <a-scene embedded arjs>

//           <a-assets timeout="30000">
//             <video id="video_namahage" autoplay src="./sample.mp4" loop="true" preload="auto"></video>
//             {/* <!-- <video id="ar-video" autoplay loop="true" preload="auto" src="test0818.mp4"></video> --> */}
//             <audio src="./sample.mp4" autoplay></audio>
//           </a-assets>

//           {/* <!-- マーカー(~.patt)のURL --> */}
//           <a-marker type="pattern" url="pattern-test.patt" registerevents>
//             {/* <!-- <a-marker type="pattern" url="pattern-marker.patt" registerevents> --> */}
//             {/* <!-- <a-box position="0 -1 0" scale="1 1 1" color="grey"></a-box> --> */}
//             <a-video src="#video_namahage" width="4.6" height="4.6" position="0 0 0" rotation="0 0 0" play="true"></a-video>
//           </a-marker>
//           <a-entity camera></a-entity>
//         </a-scene>
//       </body>
//     </div>
//   )
// }

// export default ARReader;