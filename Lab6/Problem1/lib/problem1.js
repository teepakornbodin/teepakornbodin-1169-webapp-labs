document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Change document title
    document.title = "KKU Engineering";
    
    // 2. Image Replacement and Linking
    const mainImage = document.querySelector('#main-image');
    if (mainImage) {
        // Faculty of Engineering image
        mainImage.src = "https://admissions.kku.ac.th/wp-content/uploads/2021/08/en-1-scaled.jpg";
        mainImage.alt = "Faculty of Engineering KKU";


        mainImage.style.maxWidth = "300px";   
        mainImage.style.height = "auto";     
        mainImage.style.display = "block"; 
        mainImage.style.textAlign = "left";   
        mainImage.style.margin = "0";  
        
        // Create clickable 
        const imageLink = document.createElement('a');
        imageLink.href = "https://www.en.kku.ac.th";
        imageLink.target = "_self"; // เปิดให้แทบเดิม
        
        // Wrap the image with the link
        const parent = mainImage.parentNode;
        parent.insertBefore(imageLink, mainImage);
        imageLink.appendChild(mainImage);
    }
    
    // 3. Dynamic 
    const section = document.querySelector('section');
    if (section) {
        // Create new paragraph 
        const newParagraph = document.createElement('p');
        
        // Set text content
        newParagraph.innerHTML = "We hope you enjoy learning";
        
        // apply styling using JavaScript
        newParagraph.style.color = "white";
        newParagraph.style.backgroundColor = "black";
        newParagraph.style.fontSize = "24px";
        newParagraph.style.padding = "15px 25px"; 
        newParagraph.style.textAlign = "center";
        newParagraph.style.marginTop = "20px";
        newParagraph.style.fontWeight = "bold";
        newParagraph.style.maxWidth = "50%";    
        newParagraph.style.minWidth = "auto";    
        newParagraph.style.margin = "20px 0";  

        // add CSS class for additional styling
        newParagraph.className = "dynamic-paragraph";
        
        // append to section
        section.appendChild(newParagraph);
    }
});