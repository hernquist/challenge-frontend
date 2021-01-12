import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Link from "next/link";
import { get } from "lodash";
import { ModuleColumn, UpNextPage, UpNextTitle } from "./styles";
import { LevelButton as ModuleButton } from "../select-your-own/styles";

const UpNext = () => {
  const setUpNextModules = useStoreActions((thunk) => thunk.setUpNextModules);
  const user = useStoreState((state) => state.user);

  useEffect(() => {
    setUpNextModules();
  }, [setUpNextModules]);

  const upNextModules = get(user, "upNextModules", []);

  return (
    <UpNextPage>
      <UpNextTitle>What's up next for you</UpNextTitle>
      <ModuleColumn>
        {upNextModules.slice(0, 5).map((module, i) => {
          const [topic, engagement, level] = module.split("/");
          const content = `${topic} ${engagement} ${level}`;
          const href = `/${topic}/${engagement}/[level]/[assessment]`;

          return (
            <Link href={href} as={module + "/assess"}>
              <ModuleButton style={{ textTransform: "capitalize" }}>
                {content}
              </ModuleButton>
            </Link>
          );
        })}
      </ModuleColumn>
    </UpNextPage>
  );
};

export default UpNext;
