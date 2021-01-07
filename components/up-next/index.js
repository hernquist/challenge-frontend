import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useStoreActions, useStoreState } from "easy-peasy";

const UpNext = () => {
  const setUpNextModules = useStoreActions((thunk) => thunk.setUpNextModules);
  const user = useStoreState((state) => state.user);

  const cb = useCallback(async () => {
    setUpNextModules();
  }, [setUpNextModules]);

  useEffect(() => {
    cb();
  }, []);

  console.log("user", user);
  return <div>UPNEXT</div>;
};

export default UpNext;
