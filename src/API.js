const NoteAPI = {
    notes: [
      { noteNum: 1, noteName: "Note 1", note: "this is note 1" },
      { noteNum: 2, noteName: "Note 2", note: "this is note 2" }
    ],
    all: function() { return this.notes},
    get: function(id) {
      const isNote = n => n.noteNum === id
      return this.notes.find(isNote)
    }
  }
  
  export default NoteAPI
