(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.21,
  "pitch": 0
 },
 "id": "camera_2C542D3E_3056_374E_41C5_F31669F13CC5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.54,
   "backwardYaw": -28.82,
   "distance": 1,
   "panorama": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.92,
   "backwardYaw": 126.07,
   "distance": 1,
   "panorama": "this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -14.63,
   "backwardYaw": -156.45,
   "distance": 1,
   "panorama": "this.panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 17.36,
   "backwardYaw": -159.6,
   "distance": 1,
   "panorama": "this.panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.13,
   "backwardYaw": 103.19,
   "distance": 1,
   "panorama": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD",
 "thumbnailUrl": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_t.jpg",
 "label": "L - 005",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_37B633B0_2FDE_F352_41B6_095E6E079521",
  "this.overlay_37515A4E_2FDE_3D31_41A0_AB3B33C83091",
  "this.overlay_377EEDA4_2FDE_3772_41C3_2F951F705852",
  "this.overlay_36CBB0EA_2FDE_0EF1_41B5_9FE44A98679E",
  "this.overlay_2C912F85_3056_1332_41AC_037A553A3A2F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.83,
  "pitch": 0
 },
 "id": "camera_2EB84B97_3056_335E_4195_46EBF0C27813",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F",
 "thumbnailUrl": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_t.jpg",
 "label": "AD - 000",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3BBC3A8D_2FCE_1D33_416A_ABA06C6D3D59"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.16,
  "pitch": 0
 },
 "id": "camera_2C667D5C_3056_37D1_41C2_DDEA82BF602B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.66,
  "pitch": 0
 },
 "id": "camera_2C7EAD63_3056_37F5_41A3_6B4F7E036F3E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 133.68,
   "backwardYaw": -62.59,
   "distance": 1,
   "panorama": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02",
 "thumbnailUrl": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_t.jpg",
 "label": "L - 004",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3DE7D915_2FB1_FF52_41C0_C23080C98620"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "media": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.93,
  "pitch": 0
 },
 "id": "camera_2EF12BDA_3056_32D6_41A9_342A5C59FF04",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.77,
  "pitch": 0
 },
 "id": "camera_2C827D87_3056_373F_41B2_9D95B1B4FE84",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.14,
  "pitch": 0
 },
 "id": "camera_2E57EB36_3056_335E_41C0_00D539CF8B3E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.53,
  "pitch": 0
 },
 "id": "camera_2E4A9B1F_3056_334E_41B5_AA8501C4E69E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.13,
  "pitch": 0
 },
 "id": "camera_2E93EB80_3056_3332_41AB_457209FCA87E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.32,
  "pitch": 0
 },
 "id": "camera_2E9C0B71_3056_33D2_41A0_1C01953A9009",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -173.1,
   "backwardYaw": -65.23,
   "distance": 1,
   "panorama": "this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927",
 "thumbnailUrl": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_t.jpg",
 "label": "P - M - 02",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3A309A65_2FD6_1DF3_4196_FB2341118A50"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.97,
  "pitch": 0
 },
 "id": "camera_2C428D2D_3056_3772_41BD_A03688C7B154",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 138.71,
   "backwardYaw": 46.47,
   "distance": 1,
   "panorama": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90",
 "thumbnailUrl": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_t.jpg",
 "label": "P _ F _ 004",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_375F6686_2FDE_353E_4176_FF5EB51F64C3"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 93.03,
   "backwardYaw": -41.04,
   "distance": 1,
   "panorama": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 5.34,
   "backwardYaw": -33.84,
   "distance": 1,
   "panorama": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855",
 "thumbnailUrl": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_t.jpg",
 "label": "P _ F _ 002",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_39515BED_2FD2_12F3_41AF_6BC78DC8E560",
  "this.overlay_38896CDF_2FD2_36CF_41BF_D2357B2AE3B5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.08,
  "pitch": 0
 },
 "id": "camera_2F358C0D_3056_3532_41B1_69F028455B55",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.29,
  "pitch": 0
 },
 "id": "camera_2E8ADB69_3056_33F2_41C2_C73F55E07F37",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.18,
  "pitch": 0
 },
 "id": "camera_2EE08BCC_3056_3332_41B8_DB07AB37482E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 25.49,
  "pitch": 0
 },
 "id": "camera_2EA49B8E_3056_334E_4174_53FE3C4A4A5D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.81,
  "pitch": 0
 },
 "id": "camera_2F25AC00_3056_3532_41A0_C441758BB3B0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.34,
  "pitch": 0
 },
 "id": "camera_2E63AB4C_3056_3332_41C6_70C7EEB389C2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.78,
  "pitch": 0
 },
 "id": "camera_2C4C7D11_3056_3752_41C2_FEFB9D70A25F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.62,
  "pitch": 0
 },
 "id": "camera_2C769D6D_3056_37F2_41C4_C9C2E1871925",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.98,
  "pitch": 0
 },
 "id": "camera_2E5C9B28_3056_3372_41C1_68B8498434CC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.44,
  "pitch": 0
 },
 "id": "camera_2ED29BBD_3056_3352_41C2_2034F87871AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.64,
  "pitch": 0
 },
 "id": "camera_2F5BAC25_3056_3572_41C2_9C1F163E5242",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.96,
  "pitch": 0
 },
 "id": "camera_2C687D51_3056_37D2_41C5_81FBDF4022DD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.37,
  "pitch": 0
 },
 "id": "camera_2C845D7E_3056_37CE_41B7_F78F5E63AD19",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.4,
  "pitch": 0
 },
 "id": "camera_2F174BF2_3056_32D6_41C7_422A3FEE1E53",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -159.6,
   "backwardYaw": 17.36,
   "distance": 1,
   "panorama": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9",
 "thumbnailUrl": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_t.jpg",
 "label": "P - B - 001",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3B4A2FC5_2FD2_1332_41C1_B70C937E98BC"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.9,
  "pitch": 0
 },
 "id": "camera_2F45CC16_3056_355E_41A3_37BB9296E55A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24ED3302_2FB2_1336_41B6_7598DA042723_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 102.86,
   "backwardYaw": -70.77,
   "distance": 1,
   "panorama": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.87,
   "backwardYaw": 89.64,
   "distance": 1,
   "panorama": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 70.17,
   "backwardYaw": -35.56,
   "distance": 1,
   "panorama": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845",
 "thumbnailUrl": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_t.jpg",
 "label": "L - 001",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_220E06AD_2FB2_1572_41C4_F1DCAF06B586",
  "this.overlay_2144C77D_2FB2_13D2_41BC_B857BDF9EF26",
  "this.overlay_201FE793_2FB1_F357_41B4_FFE7A461259D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.41,
  "pitch": 0
 },
 "id": "camera_2C443D23_3056_3776_41BA_B0C58C67338E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -156.45,
   "backwardYaw": -14.63,
   "distance": 1,
   "panorama": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2",
 "thumbnailUrl": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_t.jpg",
 "label": "A - 000",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3BCD9BA9_2FCE_1372_4185_CFD78C9254C3"
 ]
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_339A9898_2FD2_1D52_4177_255ADFEC2B76.mp3",
  "oggUrl": "media/audio_339A9898_2FD2_1D52_4177_255ADFEC2B76.ogg"
 },
 "autoplay": true,
 "id": "audio_339A9898_2FD2_1D52_4177_255ADFEC2B76",
 "data": {
  "label": "0618(1)"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.87,
  "pitch": 0
 },
 "id": "camera_2C59DD35_3056_3752_419B_A36DE7F6FFD6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.36,
  "pitch": 0
 },
 "id": "camera_2EC21BB4_3056_3351_41B2_9C4DFC3E6C50",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -41.04,
   "backwardYaw": 93.03,
   "distance": 1,
   "panorama": "this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 103.19,
   "backwardYaw": -7.13,
   "distance": 1,
   "panorama": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.38,
   "backwardYaw": -82.79,
   "distance": 1,
   "panorama": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01",
 "thumbnailUrl": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_t.jpg",
 "label": "P _ F _ 001",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_39414851_2FD1_FDD3_4181_BFA303F6D3A0",
  "this.overlay_39FB4839_2FD2_1D52_41C6_ADDED105A38C",
  "this.overlay_3A32F7D4_2FD2_32D2_41BB_A9EF6D39B097"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 94.71,
   "backwardYaw": -8.02,
   "distance": 1,
   "panorama": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9",
 "thumbnailUrl": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_t.jpg",
 "label": "P - MD - 01",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3A4E0AA7_2FD6_1D7E_41BD_63558CF8CE82"
 ]
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.29,
  "pitch": 0
 },
 "id": "camera_2C8C5D76_3056_37D1_4181_C0EEF5DE7CA0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.23,
  "pitch": 0
 },
 "id": "camera_2ECD3BA5_3056_3372_41B5_5AC7ABA30A72",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.55,
  "pitch": 0
 },
 "id": "camera_2F072BE3_3056_32F6_41C6_E0391944E539",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 105.66,
   "backwardYaw": 86.22,
   "distance": 1,
   "panorama": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -154.51,
   "backwardYaw": -155.41,
   "distance": 1,
   "panorama": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628",
 "thumbnailUrl": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_t.jpg",
 "label": "C - 001",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3D25A1F1_2FB2_0ED2_41AA_103BC65509E6",
  "this.overlay_3D75BD8C_2FB2_1732_4194_D5ED71801BB4"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "media": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.46,
  "pitch": 0
 },
 "id": "camera_2E77AB5A_3056_33D6_41C5_98D966FB0C39",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -33.84,
   "backwardYaw": 5.34,
   "distance": 1,
   "panorama": "this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -82.79,
   "backwardYaw": 9.38,
   "distance": 1,
   "panorama": "this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 46.47,
   "backwardYaw": 138.71,
   "distance": 1,
   "panorama": "this.panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3",
 "thumbnailUrl": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_t.jpg",
 "label": "P _ F _ 003",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_383AD988_2FDE_3F31_41B9_53E5D0F614F4",
  "this.overlay_37CA875E_2FDE_13CE_41B8_3EA4BD860B04",
  "this.overlay_38A0E051_2FDE_0DD2_41BA_2177444EFA13"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.73,
  "pitch": 0
 },
 "id": "camera_2E69AB42_3056_3336_41C1_D7CD325F99A8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -28.82,
   "backwardYaw": -165.54,
   "distance": 1,
   "panorama": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.02,
   "backwardYaw": 94.71,
   "distance": 1,
   "panorama": "this.panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -62.59,
   "backwardYaw": 133.68,
   "distance": 1,
   "panorama": "this.panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 89.64,
   "backwardYaw": -88.87,
   "distance": 1,
   "panorama": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978",
 "thumbnailUrl": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_t.jpg",
 "label": "L - 003",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3E5FD8C2_2FB2_1D36_41B0_A1DE2438AB5D",
  "this.overlay_3F5E84A3_2FB2_1576_41C1_26C7785B0291",
  "this.overlay_3E752462_2FB6_15F1_419D_6142229A9488",
  "this.overlay_3DBDE737_2FB6_135F_41BA_278E7A73E996"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -77.27,
   "backwardYaw": -123.61,
   "distance": 1,
   "panorama": "this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD",
 "thumbnailUrl": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_t.jpg",
 "label": "GM - 001",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3CF3CD9A_2FB2_1751_41C7_6C1790266701"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -70.77,
   "backwardYaw": 102.86,
   "distance": 1,
   "panorama": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -123.61,
   "backwardYaw": -77.27,
   "distance": 1,
   "panorama": "this.panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.22,
   "backwardYaw": 105.66,
   "distance": 1,
   "panorama": "this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627",
 "thumbnailUrl": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_t.jpg",
 "label": "L - 002",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3FC797D4_2FBE_32D2_41C3_9C24647D026D",
  "this.overlay_3FDC41FE_2FBE_0ED1_41C3_83C786FA37FF",
  "this.overlay_3F14B2A2_2FBE_0D76_41C0_25699E328C1A",
  "this.overlay_3E3ED205_2FB2_0D32_41B1_6A6FE686CA24"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -155.41,
   "backwardYaw": -154.51,
   "distance": 1,
   "panorama": "this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -35.56,
   "backwardYaw": 70.17,
   "distance": 1,
   "panorama": "this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_24ED3302_2FB2_1336_41B6_7598DA042723",
 "thumbnailUrl": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_t.jpg",
 "label": "M - 001",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3CBCE0CE_2FCE_0ECE_41BE_E5A8BFB50C5A",
  "this.overlay_3C7D6BC8_2FCE_3332_41BF_49CE99032121"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 126.07,
   "backwardYaw": 0.92,
   "distance": 1,
   "panorama": "this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -65.23,
   "backwardYaw": -173.1,
   "distance": 1,
   "panorama": "this.panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_242653BC_2FB2_1352_41BF_FB681AC5538A",
 "thumbnailUrl": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_t.jpg",
 "label": "P - M - 01",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3A4C1F55_2FD2_13DD_41B8_CC05F88FAB9A",
  "this.overlay_3A177B7D_2FD6_13D2_41B2_9C78D97776BA"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.59,
  "pitch": 0
 },
 "id": "camera_2C48DD1B_3056_3756_419D_A39FF1ECF72A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.39,
  "pitch": 0
 },
 "id": "camera_2C534D48_3056_3732_41C4_DCE9927B0A6B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "left": 70,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "scrollBarVisible": "rollOver",
 "width": 550,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "top": 34,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 98,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": "1.27%",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "horizontalAlign": "center",
 "bottom": "2.51%",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container7538"
 },
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "5.247%",
 "verticalAlign": "top",
 "bottom": "3.14%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "43.457%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container4248"
 },
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "left": "7.24%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "76.357%",
 "verticalAlign": "top",
 "bottom": "3.04%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "76.859%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9, this.camera_2F174BF2_3056_32D6_41C7_422A3FEE1E53); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 41
     }
    ]
   },
   "pitch": -4.67,
   "yaw": 17.36
  }
 ],
 "id": "overlay_37B633B0_2FDE_F352_41B6_095E6E079521",
 "maps": [
  {
   "hfov": 5.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01, this.camera_2F25AC00_3056_3532_41A0_C441758BB3B0); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 28
     }
    ]
   },
   "pitch": -1.79,
   "yaw": -7.13
  }
 ],
 "id": "overlay_37515A4E_2FDE_3D31_41A0_AB3B33C83091",
 "maps": [
  {
   "hfov": 3.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A, this.camera_2EF12BDA_3056_32D6_41A9_342A5C59FF04); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 27
     }
    ]
   },
   "pitch": 0.46,
   "yaw": 0.92
  }
 ],
 "id": "overlay_377EEDA4_2FDE_3772_41C3_2F951F705852",
 "maps": [
  {
   "hfov": 3.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2, this.camera_2F072BE3_3056_32F6_41C6_E0391944E539); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 35
     }
    ]
   },
   "pitch": -6.82,
   "yaw": -14.63
  }
 ],
 "id": "overlay_36CBB0EA_2FDE_0EF1_41B5_9FE44A98679E",
 "maps": [
  {
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978, this.camera_2EE08BCC_3056_3332_41B8_DB07AB37482E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.65,
   "image": "this.AnimatedImageResource_1127BDD5_3056_36D2_41A7_09122B8E07A2",
   "pitch": -25.34,
   "yaw": -165.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2C912F85_3056_1332_41AC_037A553A3A2F",
 "maps": [
  {
   "hfov": 12.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -25.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 94,
      "height": 94
     }
    ]
   },
   "pitch": -9.46,
   "yaw": -105.44
  }
 ],
 "id": "overlay_3BBC3A8D_2FCE_1D33_416A_ABA06C6D3D59",
 "maps": [
  {
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24274D78_2FB1_F7D2_41B2_268A90A5FC3F_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978, this.camera_2C443D23_3056_3776_41BA_B0C58C67338E); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 100
     }
    ]
   },
   "pitch": -10.6,
   "yaw": 133.68
  }
 ],
 "id": "overlay_3DE7D915_2FB1_FF52_41C0_C23080C98620",
 "maps": [
  {
   "hfov": 13.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_242653BC_2FB2_1352_41BF_FB681AC5538A, this.camera_2C827D87_3056_373F_41B2_9D95B1B4FE84); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.69,
   "image": "this.AnimatedImageResource_363138BF_2FD2_1D4E_41AF_C8F46A018D41",
   "pitch": -24.53,
   "yaw": -173.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A309A65_2FD6_1DF3_4196_FB2341118A50",
 "maps": [
  {
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -24.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3, this.camera_2E4A9B1F_3056_334E_41B5_AA8501C4E69E); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 88,
      "height": 88
     }
    ]
   },
   "pitch": -9.58,
   "yaw": 138.71
  }
 ],
 "id": "overlay_375F6686_2FDE_353E_4176_FF5EB51F64C3",
 "maps": [
  {
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01, this.camera_2C687D51_3056_37D2_41C5_81FBDF4022DD); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.99,
   "image": "this.AnimatedImageResource_35CE68BF_2FD2_1D4E_41A9_91B6306971CE",
   "pitch": -14.69,
   "yaw": 93.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_39515BED_2FD2_12F3_41AF_6BC78DC8E560",
 "maps": [
  {
   "hfov": 18.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3, this.camera_2C667D5C_3056_37D1_41C2_DDEA82BF602B); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_35CE58BF_2FD2_1D4E_41C1_4F3B4AA11AFE",
   "pitch": -13.15,
   "yaw": 5.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38896CDF_2FD2_36CF_41BF_D2357B2AE3B5",
 "maps": [
  {
   "hfov": 9.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -13.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD, this.camera_2F5BAC25_3056_3572_41C2_9C1F163E5242); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 55
     }
    ]
   },
   "pitch": -7.48,
   "yaw": -159.6
  }
 ],
 "id": "overlay_3B4A2FC5_2FD2_1332_41C1_B70C937E98BC",
 "maps": [
  {
   "hfov": 7.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2439708B_2FB2_0D36_41C4_BFAB52E9EFE9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627, this.camera_2ECD3BA5_3056_3372_41B5_5AC7ABA30A72); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.07,
   "image": "this.AnimatedImageResource_201437C1_2FBE_1332_41C2_66611645A298",
   "pitch": -14,
   "yaw": 102.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_220E06AD_2FB2_1572_41C4_F1DCAF06B586",
 "maps": [
  {
   "hfov": 6.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723, this.camera_2ED29BBD_3056_3352_41C2_2034F87871AA); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 29
     }
    ]
   },
   "pitch": -1.73,
   "yaw": 70.17
  }
 ],
 "id": "overlay_2144C77D_2FB2_13D2_41BC_B857BDF9EF26",
 "maps": [
  {
   "hfov": 3.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978, this.camera_2EC21BB4_3056_3351_41B2_9C4DFC3E6C50); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.55,
   "image": "this.AnimatedImageResource_2015E7C3_2FBE_1337_41B4_8C27B61C7145",
   "pitch": -16.37,
   "yaw": -88.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_201FE793_2FB1_F357_41B4_FFE7A461259D",
 "maps": [
  {
   "hfov": 8.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -16.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD, this.camera_2C845D7E_3056_37CE_41B7_F78F5E63AD19); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 72,
      "height": 100
     }
    ]
   },
   "pitch": -19.98,
   "yaw": -156.45
  }
 ],
 "id": "overlay_3BCD9BA9_2FCE_1372_4185_CFD78C9254C3",
 "maps": [
  {
   "hfov": 9.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_236C0A25_2FB1_FD72_4198_E5A9196215B2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -19.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD, this.camera_2C59DD35_3056_3752_419B_A36DE7F6FFD6); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 101,
      "height": 101
     }
    ]
   },
   "pitch": -15.72,
   "yaw": 103.19
  }
 ],
 "id": "overlay_39414851_2FD1_FDD3_4181_BFA303F6D3A0",
 "maps": [
  {
   "hfov": 13.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3, this.camera_2C542D3E_3056_374E_41C5_F31669F13CC5); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.07,
   "image": "this.AnimatedImageResource_3631D8BF_2FD2_1D4E_41C3_EBC578E5BE25",
   "pitch": -14.97,
   "yaw": 9.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_39FB4839_2FD2_1D52_41C6_ADDED105A38C",
 "maps": [
  {
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855, this.camera_2C428D2D_3056_3772_41BD_A03688C7B154); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_3631B8BF_2FD2_1D4E_41A7_7D9BA85044F3",
   "pitch": -12.37,
   "yaw": -41.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A32F7D4_2FD2_32D2_41BB_A9EF6D39B097",
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -12.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978, this.camera_2E5C9B28_3056_3372_41C1_68B8498434CC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 68
     }
    ]
   },
   "pitch": -27.83,
   "yaw": 94.71
  }
 ],
 "id": "overlay_3A4E0AA7_2FD6_1D7E_41BD_63558CF8CE82",
 "maps": [
  {
   "hfov": 9.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -27.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627, this.camera_2C4C7D11_3056_3752_41C2_FEFB9D70A25F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 44
     }
    ]
   },
   "pitch": -8.15,
   "yaw": 105.66
  }
 ],
 "id": "overlay_3D25A1F1_2FB2_0ED2_41AA_103BC65509E6",
 "maps": [
  {
   "hfov": 5.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED3302_2FB2_1336_41B6_7598DA042723, this.camera_2C48DD1B_3056_3756_419D_A39FF1ECF72A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 34
     }
    ]
   },
   "pitch": -3.99,
   "yaw": -154.51
  }
 ],
 "id": "overlay_3D75BD8C_2FB2_1732_4194_D5ED71801BB4",
 "maps": [
  {
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2426C651_2FB2_35D2_41B1_798C19A7EE90, this.camera_2C8C5D76_3056_37D1_4181_C0EEF5DE7CA0); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 81,
      "height": 81
     }
    ]
   },
   "pitch": -13.21,
   "yaw": 46.47
  }
 ],
 "id": "overlay_383AD988_2FDE_3F31_41B9_53E5D0F614F4",
 "maps": [
  {
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01, this.camera_2C769D6D_3056_37F2_41C4_C9C2E1871925); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.73,
   "image": "this.AnimatedImageResource_35CE08C0_2FD2_1D32_41BB_CF565FA64A5C",
   "pitch": -16.6,
   "yaw": -82.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37CA875E_2FDE_13CE_41B8_3EA4BD860B04",
 "maps": [
  {
   "hfov": 11.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -16.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855, this.camera_2C7EAD63_3056_37F5_41A3_6B4F7E036F3E); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.21,
   "image": "this.AnimatedImageResource_35CEF8C0_2FD2_1D32_41BF_2B38309A9C9C",
   "pitch": -3.88,
   "yaw": -33.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38A0E051_2FDE_0DD2_41BA_2177444EFA13",
 "maps": [
  {
   "hfov": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -3.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845, this.camera_2E93EB80_3056_3332_41AB_457209FCA87E); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.28,
   "image": "this.AnimatedImageResource_363398BD_2FD2_1D52_41C5_E853C5F5249C",
   "pitch": -14.36,
   "yaw": 89.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E5FD8C2_2FB2_1D36_41B0_A1DE2438AB5D",
 "maps": [
  {
   "hfov": 6.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD, this.camera_2E77AB5A_3056_33D6_41C5_98D966FB0C39); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.87,
   "image": "this.AnimatedImageResource_363078BD_2FD2_1D52_41C7_424522B6E370",
   "pitch": -25.14,
   "yaw": -28.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F5E84A3_2FB2_1576_41C1_26C7785B0291",
 "maps": [
  {
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -25.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24EEDEDF_2FB2_72CE_41C6_CE9AA4ED3A02, this.camera_2E9C0B71_3056_33D2_41A0_1C01953A9009); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 82,
      "height": 82
     }
    ]
   },
   "pitch": -12.17,
   "yaw": -62.59
  }
 ],
 "id": "overlay_3E752462_2FB6_15F1_419D_6142229A9488",
 "maps": [
  {
   "hfov": 10.73,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_242709EB_2FB2_1EF6_41B6_63744AC2F7E9, this.camera_2E8ADB69_3056_33F2_41C2_C73F55E07F37); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": -5.26,
   "yaw": -8.02
  }
 ],
 "id": "overlay_3DBDE737_2FB6_135F_41BA_278E7A73E996",
 "maps": [
  {
   "hfov": 7.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627, this.camera_2C534D48_3056_3732_41C4_DCE9927B0A6B); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 49
     }
    ]
   },
   "pitch": -23.5,
   "yaw": -77.27
  }
 ],
 "id": "overlay_3CF3CD9A_2FB2_1751_41C7_6C1790266701",
 "maps": [
  {
   "hfov": 6.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 15
     }
    ]
   },
   "pitch": -23.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845, this.camera_2E57EB36_3056_335E_41C0_00D539CF8B3E); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.98,
   "image": "this.AnimatedImageResource_363318BD_2FD2_1D52_41C1_578BFD7D90D9",
   "pitch": -14.64,
   "yaw": -70.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FC797D4_2FBE_32D2_41C3_9C24647D026D",
 "maps": [
  {
   "hfov": 8.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -14.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 36
     }
    ]
   },
   "pitch": -5.4,
   "yaw": -37.43
  }
 ],
 "id": "overlay_3FDC41FE_2FBE_0ED1_41C3_83C786FA37FF",
 "maps": [
  {
   "hfov": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628, this.camera_2E63AB4C_3056_3332_41C6_70C7EEB389C2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 37
     }
    ]
   },
   "pitch": -6.87,
   "yaw": 86.22
  }
 ],
 "id": "overlay_3F14B2A2_2FBE_0D76_41C0_25699E328C1A",
 "maps": [
  {
   "hfov": 4.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED8FBA_2FB2_1356_41B5_FB0B134B80DD, this.camera_2E69AB42_3056_3336_41C1_D7CD325F99A8); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 40,
      "height": 41
     }
    ]
   },
   "pitch": -4.03,
   "yaw": -123.61
  }
 ],
 "id": "overlay_3E3ED205_2FB2_0D32_41B1_6A6FE686CA24",
 "maps": [
  {
   "hfov": 5.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845, this.camera_2EB84B97_3056_335E_4195_46EBF0C27813); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 28
     }
    ]
   },
   "pitch": -20.83,
   "yaw": -35.56
  }
 ],
 "id": "overlay_3CBCE0CE_2FCE_0ECE_41BE_E5A8BFB50C5A",
 "maps": [
  {
   "hfov": 4.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2386AAEE_2FB2_12F1_41C0_7CF56CA3B628, this.camera_2EA49B8E_3056_334E_4174_53FE3C4A4A5D); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 22
     }
    ]
   },
   "pitch": -16.16,
   "yaw": -155.41
  }
 ],
 "id": "overlay_3C7D6BC8_2FCE_3332_41BF_49CE99032121",
 "maps": [
  {
   "hfov": 3.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24ED3302_2FB2_1336_41B6_7598DA042723_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -16.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD, this.camera_2F358C0D_3056_3532_41B1_69F028455B55); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 55
     }
    ]
   },
   "pitch": -4.54,
   "yaw": 126.07
  }
 ],
 "id": "overlay_3A4C1F55_2FD2_13DD_41B8_CC05F88FAB9A",
 "maps": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927, this.camera_2F45CC16_3056_355E_41A3_37BB9296E55A); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "image": "this.AnimatedImageResource_363158BE_2FD2_1D4E_41AB_FACE9FD2C262",
   "pitch": -23.78,
   "yaw": -65.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A177B7D_2FD6_13D2_41B2_9C78D97776BA",
 "maps": [
  {
   "hfov": 10.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -23.78
  }
 ]
},
{
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0.18%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 314,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 42,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "shadowBlurRadius": 7,
 "top": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": true,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 314,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": 1,
 "contentOpaque": false,
 "height": 53,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "shadowBlurRadius": 7,
 "minWidth": 1,
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": true,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.01
 ]
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "left": 10,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "width": 391,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "LOREM IPSUM",
 "fontColor": "#000000",
 "verticalAlign": "top",
 "top": 0,
 "minWidth": 1,
 "height": 75,
 "fontSize": 61,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "91.304%",
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "height": "85.959%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "10%",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "10%",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "layout": "horizontal",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "layout": "vertical",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "10%",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Container8437"
 },
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "21.928%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container9886"
 },
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "71.91%",
 "verticalAlign": "top",
 "bottom": "23.39%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "height": "48.2%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container3396"
 },
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "66.351%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container3434"
 },
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "77.883%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": "98.501%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1127BDD5_3056_36D2_41A7_09122B8E07A2",
 "levels": [
  {
   "url": "media/panorama_3E042F3E_2FB6_134E_41BF_1BA8AEA331DD_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_363138BF_2FD2_1D4E_41AF_C8F46A018D41",
 "levels": [
  {
   "url": "media/panorama_242706CE_2FB2_12CE_4187_4B0FAAA57927_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_35CE68BF_2FD2_1D4E_41A9_91B6306971CE",
 "levels": [
  {
   "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_35CE58BF_2FD2_1D4E_41C1_4F3B4AA11AFE",
 "levels": [
  {
   "url": "media/panorama_24262023_2FB2_0D76_41A9_EA65CA5E7855_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_201437C1_2FBE_1332_41C2_66611645A298",
 "levels": [
  {
   "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_2015E7C3_2FBE_1337_41B4_8C27B61C7145",
 "levels": [
  {
   "url": "media/panorama_24ED837E_2FB2_73D1_41C6_6E3008B33845_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3631D8BF_2FD2_1D4E_41C3_EBC578E5BE25",
 "levels": [
  {
   "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3631B8BF_2FD2_1D4E_41A7_7D9BA85044F3",
 "levels": [
  {
   "url": "media/panorama_24262D03_2FB2_1736_41BF_AE5E7CEB8A01_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_35CE08C0_2FD2_1D32_41BB_CF565FA64A5C",
 "levels": [
  {
   "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_35CEF8C0_2FD2_1D32_41BF_2B38309A9C9C",
 "levels": [
  {
   "url": "media/panorama_2427133E_2FB2_334E_41AC_AFAA495F6BC3_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_363398BD_2FD2_1D52_41C5_E853C5F5249C",
 "levels": [
  {
   "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_363078BD_2FD2_1D52_41C7_424522B6E370",
 "levels": [
  {
   "url": "media/panorama_24D21AD6_2FB2_72DE_41BD_9B3741CB4978_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_363318BD_2FD2_1D52_41C1_578BFD7D90D9",
 "levels": [
  {
   "url": "media/panorama_24ED1740_2FB2_7331_41C1_A60CA25E3627_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_363158BE_2FD2_1D4E_41AB_FACE9FD2C262",
 "levels": [
  {
   "url": "media/panorama_242653BC_2FB2_1352_41BF_FB681AC5538A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ]
},
{
 "maxHeight": 59,
 "maxWidth": 635,
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "8.75%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "67.391%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ministry of revenue"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 167,
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "32.903%",
 "borderSize": 0,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "19.43%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "60.377%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image5496"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 469,
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "79.355%",
 "borderSize": 0,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "98.113%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11167"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 880,
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "94.34%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11246"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 321,
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "46.774%",
 "borderSize": 0,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "20.75%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "47.17%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11319"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 395,
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "50.645%",
 "borderSize": 0,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "16.98%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "49.057%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11499"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 396,
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "53.226%",
 "borderSize": 0,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "11.32%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "62.264%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11621"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "Image5138"
 },
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "45.71%",
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "10.163%",
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "propagateClick": true
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "data": {
  "name": "Image4905"
 },
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "8.167%",
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "transparencyActive": true,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "horizontalAlign": "center",
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "90%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "paddingLeft": 0,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "transparencyActive": true,
 "right": 9,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "horizontalAlign": "center",
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "30.303%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "5.236%",
 "top": "5.97%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.64vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:0.64vmin;font-family:'Segoe UI';\"/></p></div>",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText5367"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "itemMode": "normal",
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "itemLabelFontFamily": "Oswald",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minWidth": 1,
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "class": "ThumbnailGrid",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "shadow": false,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "borderRadius": 5,
 "gap": 26,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "data": {
  "name": "WebFrame"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": true
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "55%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "45%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "data": {
  "name": "X"
 },
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingBottom": 0,
 "propagateClick": false
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "left": "7.87%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 71,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "horizontalAlign": "center",
 "bottom": "1.5%",
 "minWidth": 1,
 "mode": "toggle",
 "height": 61,
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "cursor": "hand",
 "maxHeight": 84,
 "maxWidth": 84,
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "3.13%",
 "width": "60.938%",
 "borderSize": 0,
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "3.5%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "42.529%",
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image2783"
 }
},
{
 "cursor": "hand",
 "maxHeight": 84,
 "maxWidth": 84,
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "4.69%",
 "width": "57.813%",
 "borderSize": 0,
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "30.53%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "28.5%",
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image2877"
 }
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": "0%",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "horizontalAlign": "center",
 "bottom": "4.5%",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 998,
 "maxWidth": 1202,
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "6.786%",
 "borderSize": 0,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "bottom": "1.63%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "5.865%",
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "Image3661"
 }
},
{
 "maxHeight": 1185,
 "maxWidth": 1012,
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image4301"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingBottom": 40,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "10%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed_rollover.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "5%",
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "vertical",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 40,
 "height": "25%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 }
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "top": "26%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "height": 130,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.01vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.57vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.57vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.29vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.29vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.29vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.4vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.29vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.29vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "2.39vh",
 "width": 180,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 50,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "46%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.01vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.57vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.57vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 50,
 "label": "RECEPTION >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 50,
 "label": "ROOMS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 50,
 "label": "AMENITIES >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Inserdt Text",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 50,
 "label": "SPORTS AREA >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 50,
 "label": "SWIMMING POOL >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 50,
 "label": "RESTAURANTS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "height": 56,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "horizontal",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "fontSize": 18,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 8,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Main Entrance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lobby",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Reception",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Reception",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Meeting Area 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Meeting Area 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Bar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Chill Out",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Terrace",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 0,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Garden",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "fontSize": 18,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 8,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "fontSize": 18,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 8,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "fontSize": 18,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 8,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "fontSize": 18,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 8,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "fontSize": 18,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "height": 8,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "fontWeight": "normal",
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "paddingBottom": 0,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "horizontalAlign": "left",
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "75%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.29vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.4vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.4vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.4vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.64vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.64vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingLeft": 0,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingLeft": 0,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingLeft": 0,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingLeft": 0,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "transparencyActive": false,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingTop": 0,
 "pressedRollOverIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed_rollover.png",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 }
}],
 "start": "this.playAudioList([this.audio_339A9898_2FD2_1D52_4177_255ADFEC2B76]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "layout": "absolute",
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
