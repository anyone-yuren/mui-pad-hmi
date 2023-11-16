import { create } from "zustand";
import { persist } from "zustand/middleware";

type TPosition = {
  x: number
  y: number
}
export interface IMapPopupActionConfig {
  visible: boolean
  type: "ReflectorAddMap" | "ReflectorUpdateMap" | "SlamMapList" | undefined 
}

export type TActivePanel = "Reflector" | "Slam" 

interface State {

  activePanel: TActivePanel ,
  setActivePanel: (panel: TActivePanel)=>void

  agvPosition: TPosition
  setAgvPosition: (position: TPosition) => void

  lockAgvView: boolean
  setLockAgvView: (isLock: boolean) => void

  mapPopupActionConfig: IMapPopupActionConfig
  setMapPopupActionConfig: (popupConfig: IMapPopupActionConfig) => void

}

const storageOptions = {
  name: "map"
}

const localAndMapStore = (
  set:(partial: State | Partial<State> | ((state: State) => State | Partial<State>), replace?: boolean | undefined) => void, 
  get:()=>State
)=>({

  activePanel:"Reflector" as TActivePanel,
  setActivePanel: (activePanel: TActivePanel)=>{
    set({activePanel})
  },

  agvPosition: {
    x:0,
    y:0
  },
  setAgvPosition: (agvPosition: TPosition)=>{
    set({agvPosition})
  },

  lockAgvView: true,
  setLockAgvView:(lockAgvView: boolean)=>{
    set({lockAgvView})
  },

  mapPopupActionConfig: {
    visible: false,
    type: "ReflectorAddMap" as IMapPopupActionConfig["type"]
  },
  setMapPopupActionConfig: (mapPopupActionConfig: IMapPopupActionConfig)=>{
    set({mapPopupActionConfig})
  }
})

export const useMapStore = create<State>()(
  persist(
    localAndMapStore,
    storageOptions
  )
);
