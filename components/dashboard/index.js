import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  DashboardContainer,
  A,
  DashboardButtonsContainer as ButtonsContainer,
  LinkWrapper,
  Label,
  Wrapper,
} from "./styles";
import { useStoreActions, useStoreState } from "easy-peasy";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState({});
  const addContentMap = useStoreActions((thunk) => thunk.addContentMap);
  const contentMap = useStoreState((state) => state.contentMap);

  const cb = useCallback(async () => {
    addContentMap();
  }, [addContentMap]);

  useEffect(() => {
    if (contentMap.length === 0 || !contentMap) {
      cb();
    }
  }, []);

  // TODO: disable links while setLoading is true
  if (loading || contentMap.length === 0) {
    return <div>LOADING</div>;
  }

  return (
    <DashboardContainer>
      <Wrapper>
        <Label>OPTIONS</Label>
        <ButtonsContainer>
          <LinkWrapper>
            <Link href="/up-next">
              <A>Up Next</A>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/select-your-own">
              <A>Select Your Own</A>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/your-progress">
              <A>Your Progress</A>
            </Link>
          </LinkWrapper>
        </ButtonsContainer>
      </Wrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
