import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MainScreen() {
  return (
    <RecoilRoot>
      <h1>This is the main screen</h1>
    </RecoilRoot>);
}

export default MainScreen;