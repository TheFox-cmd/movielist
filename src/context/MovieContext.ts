import { createContext } from 'react';
import { ReactSetState } from '../types/Utils';

type LikedListContextType = {
  likedList: number[];
  setLikedList: ReactSetState<number[]>;
};

export const LikedListContext = createContext<LikedListContextType>({
  likedList: [],
  setLikedList: () => {},
});

type ModalContextType = {
  activeMovieIDModal: number | null;
  setActiveMovieIDModal: ReactSetState<number | null>;
};

export const ModalContext = createContext<ModalContextType>({
  activeMovieIDModal: null,
  setActiveMovieIDModal: () => {},
});