const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// serch input

const headers = document.querySelectorAll(".accordion-item-header");

// Add an event listener to the search input
document.getElementById("searchQueryInput").addEventListener("input", filterSearch);

function filterSearch() {
  const searchValue = document.getElementById("searchQueryInput").value.toLowerCase();

  headers.forEach((header) => {
    const countryName = header.textContent.trim().toLowerCase();
    const accordionItem = header.closest(".accordion-item");

    // Check if the country name contains the search input value
    if (countryName.includes(searchValue)) {
      accordionItem.style.display = "block";
    } else {
      accordionItem.style.display = "none";
    }
  });
}











//channels

const accordionContents = document.querySelectorAll('.content');

// Function to process the content and add <br> elements after each line
function addLineBreaks(element) {
    const content = element.textContent;
    const lines = content.split('\n');

    // Add a small space on the left side of every line (using padding)
    const indentedLines = lines.map(line => `<span style="padding-left: 15px">${line.trim()}</span>`);

    element.innerHTML = indentedLines.join('<br>');
}

// Call the function for each accordion content
accordionContents.forEach(addLineBreaks);

