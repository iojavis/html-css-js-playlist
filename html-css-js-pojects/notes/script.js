const add_btn = document.getElementById("add");
add_btn.addEventListener("click", () => {
  createNote();
});

function createNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;
  const edit_btn = note.querySelector(".edit");
  const delete_btn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const text_area = note.querySelector("textarea");

  text_area.value = text;
  // main.innerHTML = marked(text); //problem here...

  delete_btn.addEventListener("click", () => {
    note.remove();
  });

  edit_btn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    text_area.classList.toggle("hidden");
  });

  text_area.addEventListener("input", () => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}
