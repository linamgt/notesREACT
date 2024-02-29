import NoteListItem from './NoteListItem';

export default function NoteList({ notes }) {

    const listNotes = notes.map((note, index) =>
    <li key={index}><NoteListItem note={note}></NoteListItem>
    </li>
    );

    return (
        <>
            <p>A NOTE LIST</p>
            <ul>{ listNotes}</ul>
        </>
    )
}