const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll(".video-shell video").forEach((video) => {
  const shell = video.closest(".video-shell");
  const source = video.querySelector("source");

  if (!source) return;

  fetch(source.src, { method: "HEAD" })
    .then((response) => {
      if (response.ok) shell.classList.add("has-video");
    })
    .catch(() => {
      // Keep the explanatory placeholder visible until the video is added.
    });
});
