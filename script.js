for (let i = 0; i < 5; i++) {
    const faqHeaders = document.getElementsByClassName("faq-header");
    const faqParagraphs = document.getElementsByClassName("faq-p");
    const faqArrowrotation = document.getElementsByClassName("faq-arrow-down");
    faqArrowrotation[i].addEventListener("click", displayAnswer);
    faqHeaders[i].addEventListener("click", displayAnswer);
    function displayAnswer() {
        faqHeaders[i].classList.toggle("faq-header-activated");
        faqParagraphs[i].classList.toggle("faq-p-visible");
        faqArrowrotation[i].classList.toggle("faq-arrow-down-rotated")
        switch (i) {
            case 0:
                faqHeaders[1].classList.remove("faq-header-activated");
                faqParagraphs[1].classList.remove("faq-p-visible");
                faqHeaders[2].classList.remove("faq-header-activated");
                faqParagraphs[2].classList.remove("faq-p-visible");
                faqHeaders[3].classList.remove("faq-header-activated");
                faqParagraphs[3].classList.remove("faq-p-visible");
                faqParagraphs[4].classList.remove("faq-p-visible");
                faqHeaders[4].classList.remove("faq-header-activated");
                break;
            case 1:
                faqHeaders[0].classList.remove("faq-header-activated");
                faqParagraphs[0].classList.remove("faq-p-visible");
                faqHeaders[2].classList.remove("faq-header-activated");
                faqParagraphs[2].classList.remove("faq-p-visible");
                faqHeaders[3].classList.remove("faq-header-activated");
                faqParagraphs[3].classList.remove("faq-p-visible");
                faqHeaders[4].classList.remove("faq-header-activated");
                faqParagraphs[4].classList.remove("faq-p-visible");
                break;
            case 2:
                faqHeaders[0].classList.remove("faq-header-activated");
                faqParagraphs[0].classList.remove("faq-p-visible");
                faqHeaders[1].classList.remove("faq-header-activated");
                faqParagraphs[1].classList.remove("faq-p-visible");
                faqHeaders[3].classList.remove("faq-header-activated");
                faqParagraphs[3].classList.remove("faq-p-visible");
                faqHeaders[4].classList.remove("faq-header-activated");
                faqParagraphs[4].classList.remove("faq-p-visible");
                break;
            case 3:
                faqHeaders[0].classList.remove("faq-header-activated");
                faqParagraphs[0].classList.remove("faq-p-visible");
                faqHeaders[1].classList.remove("faq-header-activated");
                faqParagraphs[1].classList.remove("faq-p-visible");
                faqHeaders[2].classList.remove("faq-header-activated");
                faqParagraphs[2].classList.remove("faq-p-visible");
                faqHeaders[4].classList.remove("faq-header-activated");
                faqParagraphs[4].classList.remove("faq-p-visible");
                break;
            case 4:
                faqHeaders[0].classList.remove("faq-header-activated");
                faqParagraphs[0].classList.remove("faq-p-visible");
                faqHeaders[1].classList.remove("faq-header-activated");
                faqParagraphs[1].classList.remove("faq-p-visible");
                faqHeaders[2].classList.remove("faq-header-activated");
                faqParagraphs[2].classList.remove("faq-p-visible");
                faqHeaders[3].classList.remove("faq-header-activated");
                faqParagraphs[3].classList.remove("faq-p-visible");
                break;
            default:
                alert("An error occurred");
                console.log("An error occurred");
        }

    }
}