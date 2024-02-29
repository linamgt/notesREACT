export default function NoteList({ notes, onRemoveBtn }) {

    // Génération des li pour chaque note dons notes
    const listNotes = notes.map((note, index) =>
    <li key={index}>{ note.text }
    <button onClick={(event) => onRemoveBtn(note)}>x</button>
    </li>
    );

    return (
        <>
            <p>A NOTE LIST</p>
            <ul>{ listNotes}</ul>
        </>
    )
}