import { Note } from "./App";
import {
  useParams,
  Navigate,
  Outlet,
  useOutletContext,
} from "react-router-dom";

type NotesProps = {
  notes: Note[];
};

export const NoteLayout = ({ notes }: NotesProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note === null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useNote() {
  return useOutletContext<Note>();
}
