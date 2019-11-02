import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@media (max-width: 767px) {
  html {
    font-size: 13px
  }
}

.headroom-wrapper {
  width: 100%
}
.headroom {
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.headroom--unfixed {
  // position: fixed;
  transform: translateY(0);
}
.headroom--scrolled {
  transition: transform 200ms ease-in-out;
}
.headroom--unpinned {
  position: fixed;
  transform: translateY(-100%);
}
.headroom--pinned {
  position: fixed;
  transform: translateY(0%);
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.15);
}
`;
