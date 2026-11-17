export function filterLibrary(root, keyword) {
  const norm = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  const term = norm(keyword.trim());
  let count = 0;
  root.querySelectorAll("#library-originals .lc:not(.lall)").forEach((card) => {
    const matches =
      !term || norm(card.querySelector("h3").textContent).includes(term);
    card.classList.toggle("hid", !matches);
    if (matches) count++;
  });
  root.querySelector("#lib .lall").classList.toggle("hid", !!term);
  root.querySelector("#lem").classList.toggle("on", count === 0);
  root.querySelector("#cnt2").textContent = count;
  root
    .querySelectorAll("#lf2 button")
    .forEach((button) =>
      button.classList.toggle("on", norm(button.dataset.q) === term),
    );
  refreshLibraryLoop(root);
}

export function refreshLibraryLoop(root) {
  const track = root.querySelector(".library-track");
  const group = track.firstElementChild;
  const originals = root.querySelector("#library-originals");
  track.querySelectorAll("[data-loop-clone]").forEach((node) => node.remove());
  const hasCards = originals.querySelector(".lc:not(.hid)");
  track.hidden = !hasCards;
  if (!hasCards) return;
  function copy(node) {
    const clone = node.cloneNode(true);
    clone.removeAttribute("id");
    clone.dataset.loopClone = "";
    clone.setAttribute("aria-hidden", "true");
    clone
      .querySelectorAll("[id]")
      .forEach((element) => element.removeAttribute("id"));
    clone.querySelectorAll("a").forEach((link) => (link.tabIndex = -1));
    clone.querySelectorAll(".rv").forEach((card) => card.classList.add("on"));
    return clone;
  }
  const width = originals.getBoundingClientRect().width;
  const viewport = root.querySelector("#lib").clientWidth;
  const repeats = width ? Math.max(1, Math.ceil(viewport / width)) : 1;
  for (let i = 1; i < repeats; i++) group.appendChild(copy(originals));
  track.appendChild(copy(group));
  track.style.setProperty(
    "--library-duration",
    `${Math.max(18, group.getBoundingClientRect().width / 32)}s`,
  );
}

