const scrollToSection = (sectionId: string) => {
  const scrollContainer = document.querySelector(".scroll-container");
  const targetSection = document.getElementById(sectionId);

  if (!scrollContainer || !targetSection) {
    console.warn(`Could not find scroll container or section: ${sectionId}`);
    return;
  }

  // Get the position of the target section relative to the scroll container
  const containerRect = scrollContainer.getBoundingClientRect();
  const sectionRect = targetSection.getBoundingClientRect();

  // Calculate the scroll position needed, accounting for the 56px sticky ActionBar
  const actionBarHeight = 56;
  const scrollTop =
    scrollContainer.scrollTop +
    (sectionRect.top - containerRect.top) -
    actionBarHeight;

  // Smooth scroll to the section
  scrollContainer.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
};

export default scrollToSection