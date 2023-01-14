// ##### TYPES #####
export type LatLngObject = { lat: number; lng: number };

export type TState = {
  addMode: boolean;
  deleteMode: boolean;
};

export type TAction = {
  type: string;
  payload?: any;
};

// ##### INTERFACES #####
export interface IPropsCommandButton {
  title: string;
  backgroundColor?: string;
  onPress: () => void;
}
