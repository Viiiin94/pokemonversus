import { atom, selector } from "recoil";

interface IModal {
  isOpen: boolean;
}

export const modalState = atom<IModal>({
  key: "toggleModal",
  default: {
    isOpen: false,
  },
});
