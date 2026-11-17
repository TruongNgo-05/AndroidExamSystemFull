import LevelUpNotice from "../components/LevelUpNotice.jsx";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useSyncExternalStore,
} from "react";
import { buyItem, rewardProgress, claimFire } from "../utils/progress.js";
import { createProgressStore } from "../services/progressStore.js";
const Context = createContext(null);
export function LearningProvider({ children, accountId }) {
  const store = useMemo(() => createProgressStore(undefined,accountId ? `jler_learning_v1:${accountId}` : undefined),[accountId]);
  const snapshot = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot,
  );
  useEffect(() => store.connect(window), [store]);
  const reward = (event) => store.transact((p) => rewardProgress(p, event));
  const update = (patch) =>
    store.transact((p) => ({
      ...p,
      ...Object.fromEntries(
        Object.entries(patch).filter(([k]) =>
          ["school", "equipped", "displayName"].includes(k),
        ),
      ),
    }));
  const buy = (id) => store.transact((p) => buyItem(p, id));
  return (
    <Context.Provider
      value={{
        progress: snapshot.progress,
        mutate: store.transact,
        claim: () => store.transact((p) => claimFire(p)),
        storageError: snapshot.error,
        reward,
        update,
        buy,
        restore: (backup) => {
          store.restore(accountId?{...backup,examHistory:undefined}:backup);
          window.dispatchEvent(new Event("jler:restore"));
        },
      }}
    >
      {children}
      <LevelUpNotice />
    </Context.Provider>
  );
}
export function useLearning() {
  return useContext(Context);
}
