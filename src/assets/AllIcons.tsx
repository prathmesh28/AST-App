import * as React from 'react';
import Svg, {SvgProps, Path, Defs, G, Rect, Pattern, Use} from 'react-native-svg';
const AppIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M10 11c-1.588-.479-4-.91-4-.91s2-.241 4-.454c1.8-.191 3.365-.502 4-3.181C14.635 3.775 15 1 15 1s.365 2.775 1 5.455c.635 2.679 2 2.969 4 3.181 2 .213 4 .455 4 .455s-2.412.43-4 .909c-1.588.479-3 1-4 4.546-.746 2.643-.893 4.948-1 5.454-.107-.506-.167-2.5-1-5.454C13 12 11.588 11.479 10 11zM7.333 3.5C6.803 3.333 6 3.182 6 3.182s.667-.085 1.333-.16c.6-.066 1.122-.175 1.334-1.113C8.878.971 9 0 9 0s.122.971.333 1.91c.212.937.667 1.038 1.334 1.113.666.074 1.333.159 1.333.159s-.804.15-1.333.318c-.53.167-1 .35-1.334 1.59C9.085 6.017 9.036 6.824 9 7c-.036-.177-.056-.875-.333-1.91-.334-1.24-.804-1.423-1.334-1.59zM2.444 18C1.474 17.713 0 17.454 0 17.454s1.222-.145 2.444-.272c1.1-.115 2.057-.302 2.445-1.91C5.277 13.666 5.5 12 5.5 12s.223 1.665.611 3.273c.388 1.607 1.222 1.781 2.445 1.909 1.222.127 2.444.273 2.444.273s-1.474.258-2.444.545c-.971.287-1.834.6-2.445 2.727-.456 1.586-.546 2.97-.611 3.273-.065-.304-.102-1.5-.611-3.273C4.278 18.6 3.415 18.287 2.444 18z" />
  </Svg>
);

const CloseSVG = (props: SvgProps) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="#0D0D0D"
    {...props}>
    <Path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" />
  </Svg>
);

const HospitalSVG = (props: SvgProps) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 512 512"
    // aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    {...props}>
    <Path
      fill="#AFC1C9"
      d="M483.114 208.091H149.055c-7.953 0-14.4 6.447-14.4 14.4v80.147H34.069c-7.953 0-14.4 6.447-14.4 14.4V482.6c0 7.953 6.447 14.4 14.4 14.4H483.115c7.953 0 14.4-6.447 14.4-14.4V222.491c-.001-7.953-6.449-14.4-14.401-14.4z"
    />
    <Path
      fill="#95AAAD"
      d="M498.737 188.996H214.701a7.2 7.2 0 0 0-7.2 7.2v16.99a8.505 8.505 0 0 0 8.505 8.505h281.427a8.505 8.505 0 0 0 8.505-8.505v-16.99a7.201 7.201 0 0 0-7.201-7.2z"
    />
    <Path
      fill="#95AAAD"
      d="M18.445 279.932h284.037a7.2 7.2 0 0 1 7.2 7.2v16.99a8.505 8.505 0 0 1-8.505 8.505H19.75a8.505 8.505 0 0 1-8.505-8.505v-16.99a7.2 7.2 0 0 1 7.2-7.2z"
    />
    <Path
      fill="#CFDBE2"
      d="M316.414 30.003H58.699c-4.162 0-7.536 3.994-7.536 8.92V488.08c0 4.926 3.374 8.92 7.536 8.92h257.715c4.162 0 7.536-3.994 7.536-8.92V38.923c0-4.926-3.374-8.92-7.536-8.92z"
    />
    <Path
      fill="#FF473E"
      d="M234.917 113.538h-33.14v-33.14a7.2 7.2 0 0 0-7.2-7.2h-14.04a7.2 7.2 0 0 0-7.2 7.2v33.14h-33.14a7.2 7.2 0 0 0-7.2 7.2v14.04a7.2 7.2 0 0 0 7.2 7.2h33.14v33.14a7.2 7.2 0 0 0 7.2 7.2h14.04a7.2 7.2 0 0 0 7.2-7.2v-33.14h33.14a7.2 7.2 0 0 0 7.2-7.2v-14.04a7.2 7.2 0 0 0-7.2-7.2z"
    />
    <Path
      fill="#0096D1"
      d="M463.893 368.367H358.115a7.2 7.2 0 0 1-7.2-7.2v-42.429a7.2 7.2 0 0 1 7.2-7.2h105.779a7.2 7.2 0 0 1 7.2 7.2v42.429a7.201 7.201 0 0 1-7.201 7.2zm8.439 81.968v-42.429a7.2 7.2 0 0 0-7.2-7.2H356.876a7.2 7.2 0 0 0-7.2 7.2v42.429a7.2 7.2 0 0 0 7.2 7.2h108.256a7.2 7.2 0 0 0 7.2-7.2zm0-181.17V255.15a7.2 7.2 0 0 0-7.2-7.2H356.876a7.2 7.2 0 0 0-7.2 7.2v14.015a7.2 7.2 0 0 0 7.2 7.2h108.256a7.2 7.2 0 0 0 7.2-7.2z"
    />
    <Path fill="#2B3B47" d="M100.843 421.106H274.27V497H100.843z" />
    <Path
      fill="#00B1FF"
      d="M205.639 368.367h-35.71a7.2 7.2 0 0 1-7.2-7.2v-44.863a7.2 7.2 0 0 1 7.2-7.2h35.71a7.2 7.2 0 0 1 7.2 7.2v44.863a7.2 7.2 0 0 1-7.2 7.2zm85.161-7.2v-44.863a7.2 7.2 0 0 0-7.2-7.2h-35.71a7.2 7.2 0 0 0-7.2 7.2v44.863a7.2 7.2 0 0 0 7.2 7.2h35.71a7.2 7.2 0 0 0 7.2-7.2zm-155.921 0v-44.863a7.2 7.2 0 0 0-7.2-7.2h-35.71a7.2 7.2 0 0 0-7.2 7.2v44.863a7.2 7.2 0 0 0 7.2 7.2h35.71a7.2 7.2 0 0 0 7.2-7.2zm-19.774-92.002v-44.863a7.2 7.2 0 0 0-7.2-7.2H91.969a7.2 7.2 0 0 0-7.2 7.2v44.863a7.2 7.2 0 0 0 7.2 7.2h15.936a7.2 7.2 0 0 0 7.2-7.2zm58.565 0v-44.863a7.2 7.2 0 0 0-7.2-7.2h-15.936a7.2 7.2 0 0 0-7.2 7.2v44.863a7.2 7.2 0 0 0 7.2 7.2h15.936a7.2 7.2 0 0 0 7.2-7.2zm58.565 0v-44.863a7.2 7.2 0 0 0-7.2-7.2h-15.936a7.2 7.2 0 0 0-7.2 7.2v44.863a7.2 7.2 0 0 0 7.2 7.2h15.936a7.2 7.2 0 0 0 7.2-7.2zm58.565 0v-44.863a7.2 7.2 0 0 0-7.2-7.2h-15.936a7.2 7.2 0 0 0-7.2 7.2v44.863a7.2 7.2 0 0 0 7.2 7.2H283.6a7.2 7.2 0 0 0 7.2-7.2z"
    />
    <Path
      fill="#67747C"
      d="M274.27 429.12H100.843v-8.22c0-5.442 4.412-9.854 9.854-9.854h153.718c5.442 0 9.854 4.412 9.854 9.854v8.22z"
    />
    <Path
      fill="#95AAAD"
      d="M329.803 20.062H45.766a7.2 7.2 0 0 0-7.2 7.2v16.99a8.505 8.505 0 0 0 8.505 8.505h281.427a8.505 8.505 0 0 0 8.505-8.505v-16.99a7.2 7.2 0 0 0-7.2-7.2z"
    />
  </Svg>
);

const LocSVG = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    id="svg822"
    {...props}
  >
    <Defs  />
    <G
      id="layer1"
      transform="translate(0,-289.0625)"
    >
      <Path
        d="M 15 3 C 8.3844276 3 3 8.38443 3 15 C 3 21.61557 8.3844276 27 15 27 C 21.615572 27 27 21.61557 27 15 C 27 8.38443 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.46531 25 15 C 25 20.53469 20.534692 25 15 25 C 9.4653079 25 5 20.53469 5 15 C 5 9.46531 9.4653079 5 15 5 z M 15 9 A 6 6 0 0 0 9 15 A 6 6 0 0 0 15 21 A 6 6 0 0 0 21 15 A 6 6 0 0 0 15 9 z "
        transform="translate(0,289.0625)"
        id="path861"
      />
    </G>
  </Svg>
);



export {AppIcon, CloseSVG, HospitalSVG,LocSVG};