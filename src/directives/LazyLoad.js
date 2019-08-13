import inViewPort from 'in-viewport';

export default {
  inserted (el)
  {
    function loadImage ()
    {
      const imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
      );
      if (imageElement)
      {
        imageElement.addEventListener("load", () =>
        {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }
    inViewPort(el, () => {
      loadImage();
    })
  },
}
