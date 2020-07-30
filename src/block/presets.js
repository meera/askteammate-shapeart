export const presets = {
    'Number Tag': {
        backgroundColor: "#2E46A2",
        childPositionX: 30,
        childPositionY: 73,
        textColor: 'white',
        shapeType: 'Number Tag',
        content: "4",
        fontSize: 74,
        width: 100,
        height: 100
    },
    'Sales Tag': {
        backgroundColor: "red",
        childPositionX: 30,
        childPositionY: 56,
        textColor: 'white',
        shapeType: 'Sales Tag',
        content: "25% \noff",
        fontSize: 24,
        width: 100,
        height: 100
    },

    'Discount Label': {
        backgroundColor: "#6b2bd3",
        childPositionX: 30,
        childPositionY: 56,
        textColor: '#4a5568',
        shapeType: 'Discount Label',
        content: "15% \noff",
        fontSize: 18,
        width: 100,
        height: 100
    },

    // 'PictureFrame': {
    //     backgroundColor: "#6b2bd3",
    //     childPositionX: 30,
    //     childPositionY: 56,
    //     textColor: '#4a5568',
    //     shapeType: 'PictureFrame',
    //     content: "15% \noff",
    //     fontSize: 18
    // },

    'Buy1Get1FreeLeft': {
        backgroundColor: "#FABC55",
        childPositionX: 20,
        childPositionY: 46,
        textColor: '#4a5568',
        shapeType: 'Buy1Get1FreeLeft',
        content: "Your \nMessage Here",
        fontSize: 12,
        width: 100,
        height: 100
    },

    'Buy1Get1FreeRight': {
        backgroundColor: "#FABC55",
        childPositionX: 10,
        childPositionY: 45,
        textColor: '#4a5568',
        shapeType: 'Buy1Get1FreeRight',
        content: "Your\nMessage Here",
        fontSize: 12,
        width: 100,
        height: 100
    },
    'ShoutOut': {
        backgroundColor: "#6b2bd3",
        childPositionX: 20,
        childPositionY: 55,
        textColor: 'black',
        shapeType: 'ShoutOut',
        content: "Scream",
        fontSize: 18,
        width: 300,
        height: 300
    },

    'ForSale': {
      backgroundColor: "#FF0000",
      childPositionX: 26,
      childPositionY: 74,
      textColor: 'black',
      shapeType: 'ForSale',
      content: "(123)456-7890",
      fontSize: 12,
      width: 300,
      height: 300
  },

};



export function DiscountLabel(attributes) {
    const { content, backgroundColor, height, width, strokeWidth, textColor, childPositionX } = attributes;
    const childPositionY = parseInt(attributes.childPositionY);
    const fontSize = parseInt(attributes.fontSize);
    var lines = content.split('\n');

    return (<g id="Discount">
        <path d="M16.196,28.356 C16.196,28.356 48.304,1.649 48.304,2.128 C48.304,2.607 78.28,28.331 78.28,28.331 L78.304,84.182 C78.308,91.736 71.723,97.863 63.597,97.866 L30.439,97.878 C22.314,97.882 15.724,91.761 15.72,84.207 L15.696,28.356 L16.196,28.356 z M47.231,11.816 L47.231,11.816 C45.257,11.817 43.656,13.349 43.657,15.237 C43.658,17.126 45.26,18.656 47.234,18.655 C49.209,18.655 50.81,17.123 50.809,15.235 C50.808,13.346 49.207,11.816 47.231,11.817 L47.231,11.816 z" fill={backgroundColor} />
        <path d="M22.75,29.665 L71.25,29.665 L71.25,91.42 L22.75,91.42 L22.75,29.665 z" fill='white' />
        <text>
            {lines.map((line, index) => {
                return (<tspan
                    x={childPositionX} 
                    y={childPositionY + fontSize * index} 
                    font-family="TimesNewRomanPS-BoldMT" 
                    font-size={fontSize} 
                    fill={textColor}>
                        {line} 
                        </tspan>
                    )
            })}
        </text>
    </g>)

}

export function Buy1Get1FreeLeft(attributes)  {
  const { content, backgroundColor, height, width, strokeWidth, textColor, childPositionX } = attributes;
  const childPositionY = parseInt(attributes.childPositionY);
  const fontSize = parseInt(attributes.fontSize);
  var lines = content.split('\n');


    return (
      <g id="Buy1Get1FreeLeft">
      <g id="rect3775">
        <path d="M23.507,32.55 L87.979,32.012 C93.505,31.965 97.977,34.446 98.006,37.573 L98.196,58.122 C98.225,61.249 93.799,63.804 88.273,63.85 L24.084,64.386 C19.387,64.476 18.37,64.253 15.397,62.422 L5.074,56.063 C2.683,54.661 2.89,54.15 2.867,51.682 L2.839,48.643 L2.811,45.604 C2.754,42.729 2.989,42.217 5.007,41.141 L15.476,34.442 C18.641,32.656 18.647,32.63 23.507,32.55 z" fill={backgroundColor}/>
        <path d="M23.507,32.55 L87.979,32.012 C93.505,31.965 97.977,34.446 98.006,37.573 L98.196,58.122 C98.225,61.249 93.799,63.804 88.273,63.85 L24.084,64.386 C19.387,64.476 18.37,64.253 15.397,62.422 L5.074,56.063 C2.683,54.661 2.89,54.15 2.867,51.682 L2.839,48.643 L2.811,45.604 C2.754,42.729 2.989,42.217 5.007,41.141 L15.476,34.442 C18.641,32.656 18.647,32.63 23.507,32.55 z" fill-opacity="0" stroke="#000000" stroke-width="1"/>
      </g>
      <g>
        <path d="M11.22,52.386 C8.794,52.386 6.827,50.515 6.827,48.207 C6.827,45.899 8.794,44.028 11.22,44.028 C13.647,44.028 15.614,45.899 15.614,48.207 C15.614,50.515 13.647,52.386 11.22,52.386 z" fill={backgroundColor}/>
        <path d="M11.22,52.386 C8.794,52.386 6.827,50.515 6.827,48.207 C6.827,45.899 8.794,44.028 11.22,44.028 C13.647,44.028 15.614,45.899 15.614,48.207 C15.614,50.515 13.647,52.386 11.22,52.386 z" fill-opacity="0" stroke="#000000" stroke-width="1"/>
      </g>
      <text>
           {lines.map((line, index) => {
                    return (<tspan x={childPositionX} y={childPositionY + (fontSize * index)} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                }
                )}
      </text>
    </g>
    )

}

export  function Buy1Get1FreeRight(attributes) {
  const { content,  height, width, strokeWidth, textColor, childPositionX, backgroundColor } = attributes;
  const childPositionY = parseInt(attributes.childPositionY);
  const fontSize = parseInt(attributes.fontSize);
  var lines = content.split('\n');
    return (

      <g id="Buy1Get1FreeRight">
    <g id="rect3775">
      <path d="M77.459,63.951 L12.986,64.337 C7.459,64.37 2.993,61.879 2.971,58.752 L2.83,38.203 C2.808,35.075 7.24,32.531 12.766,32.498 L76.957,32.113 C81.653,32.034 82.669,32.259 85.638,34.098 L95.947,40.481 C98.334,41.889 98.126,42.399 98.143,44.867 L98.164,47.906 L98.185,50.946 C98.235,53.82 97.998,54.332 95.979,55.403 L85.494,62.078 C82.325,63.856 82.319,63.882 77.459,63.951 z" fill={backgroundColor}/>
      <path d="M77.459,63.951 L12.986,64.337 C7.459,64.37 2.993,61.879 2.971,58.752 L2.83,38.203 C2.808,35.075 7.24,32.531 12.766,32.498 L76.957,32.113 C81.653,32.034 82.669,32.259 85.638,34.098 L95.947,40.481 C98.334,41.889 98.126,42.399 98.143,44.867 L98.164,47.906 L98.185,50.946 C98.235,53.82 97.998,54.332 95.979,55.403 L85.494,62.078 C82.325,63.856 82.319,63.882 77.459,63.951 z" fill-opacity="0" stroke="#000000" stroke-width="1"/>
    </g>
    <g>
      <path d="M89.42,51.294 C86.994,51.294 85.027,49.423 85.027,47.115 C85.027,44.807 86.994,42.937 89.42,42.937 C91.847,42.937 93.814,44.807 93.814,47.115 C93.814,49.423 91.847,51.294 89.42,51.294 z" fill={backgroundColor}/>
      <path d="M89.42,51.294 C86.994,51.294 85.027,49.423 85.027,47.115 C85.027,44.807 86.994,42.937 89.42,42.937 C91.847,42.937 93.814,44.807 93.814,47.115 C93.814,49.423 91.847,51.294 89.42,51.294 z" fill-opacity="0" stroke="#000000" stroke-width="1"/>
    </g>
    <text >
        {lines.map((line, index) => {
                    return (<tspan x={childPositionX} y={childPositionY + (fontSize * index)} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                }
                )}
    </text>
  </g>
      
    )
}

export function PictureFrame(attributes) {
    return (
      <g id="PictureFrame" >
      <g id="Gold-Frame">
        <path d="M-90.676,10.216 C-91.971,10.216 -93,11.225 -93,12.47 L-93,177.765 C-93,179.01 -91.971,180 -90.676,180 L186.863,180 C188.158,180 189.207,179.01 189.207,177.765 L189.207,12.47 C189.207,11.225 188.158,10.216 186.863,10.216 L-90.676,10.216 z M-71.741,26.082 L167.321,26.082 C168.616,26.082 169.645,27.091 169.645,28.336 L169.645,163.08 C169.645,164.326 168.616,165.316 167.321,165.316 L-71.741,165.316 C-73.036,165.316 -74.066,164.326 -74.066,163.08 L-74.066,28.336 C-74.066,27.091 -73.036,26.082 -71.741,26.082 z" fill="url(#Gradient_1)" id="path4899"/>
        <path d="M-90.233,8.364 C-91.543,8.364 -92.585,9.376 -92.585,10.626 L-92.585,176.47 C-92.585,177.72 -91.543,178.713 -90.233,178.713 L190.629,178.713 C191.939,178.713 193,177.72 193,176.47 L193,10.626 C193,9.376 191.939,8.364 190.629,8.364 L-90.233,8.364 z M-71.071,24.283 L170.853,24.283 C172.163,24.283 173.205,25.295 173.205,26.544 L173.205,161.735 C173.205,162.985 172.163,163.978 170.853,163.978 L-71.071,163.978 C-72.382,163.978 -73.424,162.985 -73.424,161.735 L-73.424,26.544 C-73.424,25.295 -72.382,24.283 -71.071,24.283 z" fill="#554400" id="path4901"/>
        <path d="M182.819,12.864 C134.895,13.131 86.974,12.858 39.05,12.966 C-3.512,12.949 -46.104,12.922 -88.644,13.084 C-88.498,15.805 -88.125,18.509 -88.492,21.228 C-88.386,72.705 -88.711,124.185 -88.32,175.661 C-84.991,175.588 -81.673,175.166 -78.345,175.528 C10.534,175.429 99.414,175.708 188.293,175.376 C188.289,172.282 187.716,169.212 188.152,166.122 C188.014,115.018 188.437,63.914 187.923,12.81 C186.222,12.828 184.521,12.847 182.82,12.865 z M-70.51,20.976 C-24.297,21.275 21.916,21.017 68.134,21.1 C102.854,21.092 137.598,20.937 172.303,21.448 C176.494,22.981 177.253,27.975 176.619,31.733 C176.332,76.023 177.097,120.348 176.191,164.616 C174.448,168.599 169.141,169.196 165.163,168.568 C85.837,168.419 6.508,168.856 -72.814,168.348 C-76.987,167.315 -78.199,162.48 -77.64,158.875 C-77.157,114.231 -78.199,69.555 -77.084,24.928 C-76.081,22.427 -73.23,21.033 -70.511,20.976 z" fill="#D4AA00" id="path5203"/>
        <path d="M188.844,9.952 C169.934,10.388 150.999,9.945 132.077,10.116 C57.45,10.167 -17.209,10.003 -91.818,10.226 C-93.401,12.376 -91.442,15.357 -92.24,17.83 L-92.24,55.502 C-87.08,57.664 -81.915,59.814 -76.65,61.738 C-76.398,49.405 -77.276,36.974 -76.189,24.705 C-73.453,20.724 -67.895,23.207 -63.848,22.535 C14.697,22.58 93.256,22.393 171.793,22.663 C176.42,24.088 174.713,29.523 174.945,32.965 L174.945,84.916 C180.353,84.563 185.753,84.114 191.15,83.64 C190.94,59.202 191.563,34.643 190.843,10.284 C190.269,9.921 189.51,9.909 188.844,9.955 z" fill="url(#Gradient_2)" id="path4909-8"/>
        <path d="M177.198,154.149 C177.155,157.761 178.277,162.572 174.652,165.038 C171.441,166.828 167.53,165.436 164.029,165.899 C88.251,166.121 12.466,165.989 -63.313,165.982 C-67.416,165.543 -72.501,167.414 -75.822,164.215 C-78.005,161.929 -76.803,158.608 -77.362,155.84 C-77.719,146.376 -77.274,136.908 -77.372,127.443 C-81.619,129.052 -85.793,130.765 -89.985,132.525 C-89.953,145.603 -90.085,158.734 -89.858,171.778 C-90.003,173.007 -90.382,174.247 -90.101,175.455 C-0.092,175.709 89.92,175.47 179.929,175.594 C183.327,175.62 186.725,175.66 190.124,175.664 C190.783,152.035 190.193,128.399 190.39,104.767 C185.997,104.372 181.6,104.012 177.198,103.713 L177.198,154.15 z" fill="url(#Gradient_3)" id="path4909"/>
        <path d="M-77.779,18.625 C-79.037,18.625 -80.034,19.631 -80.034,20.877 L-80.034,165.633 C-80.034,166.878 -79.037,167.885 -77.779,167.885 L-73.307,167.885 L-73.307,28.086 C-73.307,26.88 -72.326,25.908 -71.109,25.908 L169.838,25.908 C171.054,25.908 172.036,26.88 172.036,28.086 L172.036,167.885 L176.792,167.885 C178.05,167.885 179.066,166.878 179.066,165.633 L179.066,20.877 C179.066,19.631 178.05,18.625 176.792,18.625 L-77.778,18.625 z" fill="url(#Gradient_4)" id="path4907"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 56.139, 94.182)">
        <tspan x="-36.632" y="-9" font-family="TimesNewRomanPS-BoldMT" font-size="35" fill="#221717">Your</tspan>
        <tspan x="-95.139" y="31" font-family="TimesNewRomanPS-BoldMT" font-size="35" fill="#221717">Wise Worlds</tspan>
      </text>
    </g>
  )
}

export function ShoutOut(attributes) {
  const { content, backgroundColor, height, width, strokeWidth, textColor, childPositionX } = attributes;
  const childPositionY = parseInt(attributes.childPositionY);
  const fontSize = parseInt(attributes.fontSize);
  var lines = content.split('\n');

    return (
      <g id="ShoutOut">
      <path d="M67.107,71.758 L63.516,67.814 C60.348,64.334 59.881,63.902 59.549,64.15 C59.342,64.304 56.374,66.539 52.952,69.117 C49.531,71.694 46.635,73.75 46.517,73.686 C46.398,73.623 46.231,73.292 46.145,72.953 C45.962,72.227 45.78,72.188 45.198,72.749 C44.963,72.976 44.684,73.161 44.58,73.161 C44.475,73.161 43.954,71.954 43.422,70.478 C42.89,69.002 42.37,67.795 42.265,67.795 C42.161,67.795 41.18,68.333 40.085,68.993 C24.919,76.805 18.047,79.6 18.047,79.6 C18.047,79.6 20.795,73.626 25.515,64.362 C25.515,64.362 20.875,65.509 17.491,66.171 C14.104,66.834 11.197,67.378 11.031,67.38 C10.8,67.383 10.813,67.241 11.09,66.775 C11.289,66.44 11.451,66.128 11.451,66.081 C11.451,66.032 10.761,66.137 9.916,66.316 C9.072,66.492 8.316,66.578 8.236,66.509 C8.156,66.439 8.457,65.795 8.906,65.077 C12.062,60.028 14.067,56.438 13.779,56.347 C13.606,56.298 11.652,55.964 9.438,55.612 C4.423,54.816 4.487,54.832 4.822,54.48 C5.035,54.256 4.746,54.154 3.295,53.941 C2.31,53.797 1.508,53.628 1.513,53.564 C1.517,53.501 4.075,51.918 7.196,50.045 L12.872,46.64 L7.129,41.612 L1.386,36.584 L6.478,36.713 C9.278,36.785 12.714,36.9 14.109,36.97 L16.652,37.098 L16.715,31.045 L16.778,24.991 L21.712,29.971 L26.646,34.951 L30.681,30.68 C36.104,24.939 35.43,25.417 36.157,26.801 C36.491,27.437 36.906,27.957 37.079,27.957 C37.252,27.957 38.211,29.461 39.218,31.309 C40.221,33.154 41.125,34.68 41.226,34.703 C41.327,34.724 43.328,32.711 45.672,30.226 C48.017,27.742 49.999,25.705 50.077,25.698 C50.155,25.691 50.471,26.238 50.779,26.913 C51.159,27.748 51.421,28.08 51.598,27.953 C51.777,27.824 52.411,28.885 53.631,31.354 L55.404,34.942 L61.256,30.066 L67.107,25.19 C68.991,27.031 67.278,24.24 67.568,24.861 C67.692,24.861 67.978,25.372 68.204,25.998 C68.515,26.858 68.707,27.11 68.992,27.031 C69.294,26.947 69.639,27.643 70.757,30.59 C71.52,32.605 72.234,34.46 72.342,34.714 C72.533,35.159 72.789,35.065 80.066,31.895 C84.206,30.09 87.626,28.642 87.665,28.677 C87.706,28.712 87.36,29.398 86.895,30.202 C86.431,31.005 86.051,31.713 86.051,31.775 C86.051,31.838 86.58,31.653 87.227,31.367 C87.874,31.081 88.461,30.848 88.531,30.848 C88.601,30.848 87.112,33.541 85.223,36.832 C83.334,40.124 81.788,42.89 81.788,42.979 C81.788,43.068 85.118,44.155 89.19,45.394 C93.261,46.633 96.953,47.776 97.398,47.933 L98.205,48.219 L97.529,48.605 L96.854,48.991 L97.552,49.214 C97.936,49.336 98.41,49.488 98.606,49.551 C98.812,49.621 95.314,51.261 90.247,53.479 L81.527,57.292 L85.345,63.804 C87.444,67.386 89.128,70.338 89.089,70.365 C89.048,70.393 85.018,68.991 80.133,67.254 C75.248,65.518 71.172,64.093 71.074,64.088 C70.976,64.084 70.892,66.426 70.886,69.292 L70.877,74.504 L70.194,73.808 L69.511,73.113 L69.434,73.695 C69.357,74.27 69.343,74.263 68.408,73.191 L67.461,72.106 C69.434,73.695 67.106,71.757 67.106,71.757 z M34.83,69.101 C38.766,66.793 42.076,64.905 42.187,64.905 C42.297,64.905 42.944,66.44 43.626,68.317 C44.57,70.917 44.94,71.691 45.18,71.568 C45.352,71.479 48.443,69.178 52.051,66.453 C55.656,63.728 58.681,61.483 58.773,61.463 C58.866,61.441 61.1,63.802 63.738,66.705 L68.534,71.984 L68.534,66.999 C68.534,64.258 68.572,62.015 68.618,62.015 C68.665,62.015 70.29,62.58 72.23,63.271 C75.959,64.599 85.476,67.97 86.039,68.162 C86.221,68.225 84.756,65.504 82.783,62.117 C80.81,58.73 79.195,55.895 79.195,55.817 C79.195,55.739 82.924,54.059 87.482,52.085 C92.039,50.11 95.769,48.448 95.769,48.391 C95.77,48.335 93.08,47.463 89.792,46.455 C86.503,45.446 82.618,44.253 81.157,43.804 L78.503,42.987 L82.06,36.791 C84.016,33.383 85.583,30.568 85.543,30.535 C85.503,30.5 83.062,31.511 80.12,32.777 C77.177,34.042 73.958,35.423 72.966,35.845 L71.163,36.613 L69.246,31.449 L67.329,26.285 L66.772,26.657 C66.466,26.861 63.642,29.19 60.498,31.834 C57.353,34.477 54.7,36.596 54.603,36.544 C54.505,36.495 53.422,34.399 52.197,31.892 C50.971,29.387 49.898,27.337 49.813,27.337 C49.727,27.337 47.62,29.474 45.129,32.086 L40.601,36.835 L39.452,34.718 C38.82,33.554 37.632,31.375 36.811,29.877 L35.319,27.153 L34.689,27.71 C34.343,28.016 32.425,30.008 30.427,32.137 C28.429,34.265 26.716,36.007 26.619,36.007 C26.523,36.007 24.469,34.017 22.056,31.586 C17.787,27.284 17.664,27.182 17.524,27.793 C17.445,28.139 17.38,30.558 17.38,33.17 L17.38,37.918 L15.544,37.793 C14.535,37.723 11.471,37.609 8.738,37.539 L3.765,37.41 L9.067,42.053 L14.369,46.697 L13.427,47.286 C12.908,47.611 10.552,49.035 8.192,50.452 C5.831,51.87 3.976,53.087 4.069,53.158 C4.163,53.229 6.69,53.677 9.687,54.154 C12.682,54.631 15.307,55.065 15.518,55.118 C15.827,55.196 15.31,56.202 12.853,60.304 C11.177,63.104 9.805,65.412 9.805,65.433 C9.805,65.482 13.493,64.783 21.263,63.255 C24.765,62.566 27.649,62.034 27.685,62.06 C25.894,65.04 20.354,76.353 20.669,76.135 C25.277,73.594 30.076,71.364 34.838,69.101 z" fill="#0D0D0D" id="path181397"/>
    
      <text>
                {lines.map((line, index) => {
                    return (<tspan x={childPositionX} y={childPositionY + (fontSize * index)} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                }
                )}
        </text>
    </g>
  );
}

export function ForSale(attributes) {
  const { content, backgroundColor, height, width, strokeWidth, textColor, childPositionX } = attributes;
  const childPositionY = parseInt(attributes.childPositionY);
  const fontSize = parseInt(attributes.fontSize);
  var lines = content.split('\n');

  return (
  <g id="ForSale">
    <g>
      <g>
        <path d="M1.5,18.1 L99.5,18.1 L99.5,83.5 L1.5,83.5 z" fill={backgroundColor}/>
        <path d="M1.5,18.1 L99.5,18.1 L99.5,83.5 L1.5,83.5 z" fill-opacity="0" stroke="#414042" stroke-width="1" stroke-miterlimit="10"/>
      </g>
      <path d="M3.45,19.72 L96.55,19.72 L96.55,80.88 L3.45,80.88 L3.45,19.72 z" fill={backgroundColor}/>
      <path d="M15.947,37.707 L15.947,23.699 L33.4,23.699 L33.4,26.968 L23.303,26.968 L23.303,29.516 L31.344,29.516 L31.344,32.785 L23.303,32.785 L23.303,37.707 L15.948,37.707 z" fill="#000000"/>
      <path d="M59.258,30.625 C59.258,35.392 54.115,38.076 47.477,38.076 C40.433,38.076 35.727,35.353 35.727,30.586 C35.727,26.19 40.495,23.33 47.477,23.33 C55.486,23.329 59.257,26.928 59.257,30.624 z M43.084,30.625 C43.084,32.415 43.957,34.652 47.478,34.652 C50.657,34.652 51.904,32.94 51.904,30.625 C51.904,28.719 50.657,26.695 47.416,26.754 C44.08,26.754 43.084,28.855 43.084,30.625 z" fill="#000000"/>
      <path d="M69.645,32.824 L69.645,37.707 L62.29,37.707 L62.29,23.7 L72.887,23.7 C80.367,23.7 82.829,24.964 82.829,27.688 C82.829,29.302 81.676,30.664 79.058,31.112 C81.426,31.656 82.86,32.007 82.86,34.827 C82.86,36.656 82.766,37.279 83.639,37.279 L83.639,37.706 L76.19,37.706 C76.003,37.395 75.816,36.5 75.816,35.255 C75.816,33.426 75.318,32.823 71.889,32.823 L69.642,32.823 z M69.645,29.75 L72.544,29.75 C74.819,29.75 76.035,29.4 76.035,28.427 C76.035,27.435 74.788,26.968 73.074,26.968 L69.645,26.968 L69.645,29.75 z" fill="#000000"/>
      <path d="M18.358,46.648 C18.23,46.162 17.813,45.87 17.268,45.695 C16.723,45.52 16.049,45.442 15.312,45.442 C13.644,45.442 12.907,45.734 12.907,46.24 C12.907,48.341 26.183,47.038 26.183,52.135 C26.183,55.384 21.725,56.959 15.376,56.959 C9.283,56.959 5.307,54.8 5.146,52.271 L12.395,52.271 C12.556,52.776 13.005,53.146 13.646,53.38 C14.255,53.613 15.057,53.73 15.794,53.73 C17.686,53.73 18.937,53.36 18.937,52.699 C18.937,50.578 5.661,52.037 5.661,46.687 C5.661,43.711 9.894,42.213 15.666,42.213 C22.08,42.213 24.998,44.197 25.543,46.648 L18.36,46.648 z" fill="#000000"/>
      <path d="M27.593,56.59 L35.866,42.583 L43.562,42.583 L51.836,56.59 L44.3,56.59 L43.402,54.742 L35.866,54.742 L35,56.59 L27.593,56.59 z M39.651,46.805 L37.31,51.824 L42.088,51.824 L39.652,46.804 z" fill="#000000"/>
      <path d="M54.626,56.59 L54.626,42.583 L62.194,42.583 L62.194,53.322 L72.584,53.322 L72.584,56.59 L54.626,56.59 z" fill="#000000"/>
      <path d="M76.015,56.59 L76.015,42.583 L94.839,42.583 L94.839,45.851 L83.583,45.851 L83.583,47.855 L93.107,47.855 L93.107,51.123 L83.583,51.123 L83.583,53.322 L95.287,53.322 L95.287,56.59 L76.014,56.59 z" fill="#000000"/>
      <path d="M5.981,75.279 L5.981,62.462 L8.193,62.462 C9.284,62.462 9.694,63.812 9.694,67.161 C9.694,70.768 9.418,71.998 8.193,71.998 L7.154,71.998 L7.154,75.279 L5.981,75.279 z M7.958,69.025 C8.421,68.974 8.486,68.82 8.486,67.162 C8.486,65.846 8.416,65.436 7.958,65.436 L7.154,65.436 L7.154,69.025 L7.958,69.025 z" fill="#000000"/>
      <path d="M11.155,67.983 L11.196,67.983 C11.342,66.564 11.642,66.205 12.117,66.205 C12.797,66.205 13.108,67.145 13.108,69.076 L13.108,75.28 L12.099,75.28 L12.099,69.76 C12.093,68.889 12.011,68.461 11.683,68.461 C11.231,68.461 11.155,69.247 11.155,70.341 L11.155,75.28 L10.146,75.28 L10.146,62.463 L11.155,62.463 L11.155,67.983 z" fill="#000000"/>
      <path d="M16.721,70.802 C16.721,74.493 16.457,75.382 15.179,75.382 C13.917,75.382 13.642,74.39 13.642,70.802 C13.642,67.127 13.894,66.204 15.179,66.204 C16.469,66.207 16.721,67.008 16.721,70.803 z M14.651,70.802 C14.651,72.75 14.709,73.126 15.196,73.126 C15.665,73.126 15.712,72.75 15.712,70.802 C15.712,68.853 15.665,68.46 15.196,68.46 C14.709,68.46 14.651,68.853 14.651,70.802 z" fill="#000000"/>
      <path d="M18.264,66.306 L18.264,67.981 L18.305,67.981 C18.452,66.562 18.751,66.204 19.226,66.204 C19.907,66.204 20.218,67.144 20.218,69.075 L20.218,75.279 L19.209,75.279 L19.209,69.759 C19.203,68.887 19.121,68.46 18.792,68.46 C18.34,68.46 18.264,69.246 18.264,70.339 L18.264,75.279 L17.255,75.279 L17.255,66.306 L18.266,66.306 z" fill="#000000"/>
      <path d="M23.736,72.288 C23.736,73.638 23.583,74.407 23.32,74.852 C23.056,75.279 22.68,75.381 22.234,75.381 C21.02,75.381 20.727,74.151 20.727,70.801 C20.727,67.349 20.997,66.204 22.234,66.204 C23.39,66.204 23.736,67.144 23.736,70.801 L23.736,71.297 L21.736,71.297 C21.736,72.869 21.818,73.331 22.234,73.331 C22.545,73.331 22.745,73.228 22.745,72.288 L23.737,72.288 z M22.727,69.674 C22.727,68.341 22.557,68.256 22.217,68.256 C21.859,68.256 21.748,68.495 21.736,69.674 L22.728,69.674 z" fill="#000000"/>
      <path d="M25.396,69.282 L24.445,69.282 L24.445,66.308 L25.396,66.308 L25.396,69.281 z M25.396,75.279 L24.445,75.279 L24.445,72.305 L25.396,72.305 L25.396,75.279 z" fill="#000000"/>
      <path d="M26.945,77.313 L94.259,77.313" fill-opacity="0" stroke="#000000" stroke-width="2" stroke-miterlimit="10"/>
    </g>
   

    <text>
                    {lines.map((line, index) => {
                        return (<tspan x={childPositionX} y={childPositionY + fontSize * index} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                    })}

                </text>
  </g>
  );
}
export function SalesTag(attributes) {
    const { content, backgroundColor, height, width, strokeWidth, textColor, childPositionX } = attributes;
    var lines = content.split('\n');
    const childPositionY = parseInt(attributes.childPositionY);
    const fontSize = parseInt(attributes.fontSize);

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="100" height="100" viewBox="0, 0, 100, 100">
            <g id="Layer_1">
                <path d="M154.741,142.966 L154.667,142.577 L154.293,142.707 L154.423,142.333 L154.034,142.259 L154.333,142 L154.034,141.741 L154.423,141.667 L154.293,141.293 L154.667,141.423 L154.741,141.034 L155,141.333 L155.259,141.034 L155.333,141.423 L155.707,141.293 L155.577,141.667 L155.966,141.741 L155.667,142 L155.966,142.259 L155.577,142.333 L155.707,142.707 L155.333,142.577 L155.259,142.966 L155,142.667 z" fill={backgroundColor} />
                <path d="M45.741,16.966 L45.545,16.787 L45.293,16.707 L45.213,16.455 L45.034,16.259 L45.091,16 L45.034,15.741 L45.213,15.545 L45.293,15.293 L45.545,15.213 L45.741,15.034 L46,15.091 L46.259,15.034 L46.455,15.213 L46.707,15.293 L46.787,15.545 L46.966,15.741 L46.909,16 L46.966,16.259 L46.787,16.455 L46.707,16.707 L46.455,16.787 L46.259,16.966 L46,16.909 z" fill={backgroundColor} />
                <path d="M37.374,100 L30.422,88.506 L17.326,90.097 L15.924,76.647 L3.452,72.252 L7.878,59.51 L-1.5,50 L7.878,40.49 L3.452,27.748 L15.924,23.353 L17.326,9.903 L30.422,11.494 L37.374,0 L48.5,7.262 L59.626,0 L66.579,11.494 L79.675,9.903 L81.076,23.353 L93.548,27.748 L89.122,40.49 L98.5,50 L89.122,59.51 L93.548,72.252 L81.076,76.647 L79.674,90.097 L66.578,88.506 L59.626,100 L48.5,92.738 z" fill={backgroundColor} />
                <text>
                    {lines.map((line, index) => {
                        return (<tspan x={childPositionX} y={childPositionY + fontSize * index} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                    })}

                </text>
            </g>
        </svg>
    )
}
export function NumberTag(attributes) {
    const { content, backgroundColor, height, width, strokeWidth, textColor, childPositionX } = attributes;
    const childPositionY = parseInt(attributes.childPositionY);
    const fontSize = parseInt(attributes.fontSize);
    var lines = content.split('\n');
   

    return (
        <g id="Layer_2">
            <path d="M50.5,98.5 C23.99,98.5 2.5,77.01 2.5,50.5 C2.5,23.99 23.99,2.5 50.5,2.5 C77.01,2.5 98.5,23.99 98.5,50.5 C98.5,77.01 77.01,98.5 50.5,98.5 z" fill-opacity="0" stroke={backgroundColor} stroke-width="2" />
            <path d="M50,90 C27.909,90 10,72.091 10,50 C10,27.909 27.909,10 50,10 C72.091,10 90,27.909 90,50 C90,72.091 72.091,90 50,90 z" fill={backgroundColor} />
            <text>
                {lines.map((line, index) => {
                    return (<tspan x={childPositionX} y={childPositionY + (fontSize * index)} font-family="TimesNewRomanPS-BoldMT" font-size={fontSize} fill={textColor}>{line}</tspan>)
                }
                )}
            </text>
        </g>
    );
}


const attributes = {

    shapeType: { type: 'string' },
    backgroundColor: { type: 'string' },
    stroke: { type: 'boolean' },
    strokeWidth: { type: 'integer' },
    height: { type: 'integer', default: 100 },
    width: { type: 'integer', default: 100 },
    childPositionX: { type: 'integer' },
    childPositionY: { type: 'integer' },
    content: { type: 'string' },
    textColor: { type: 'string' },
    fontSize: { type: 'integer' }

};

export function usePreset(presetName) {


    const presetToSet = presets[presetName];

    Object.keys(presetToSet).map((attr) => { attributes[attr] ? attributes[attr].default = presetToSet[attr] : null });
    return attributes;
}