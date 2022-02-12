window.addEventListener("load", () => {

    // Defining root div, inserting Enjoy text, splitting it into spans so we can animate them    

    let root = document.querySelector("#root");
    root.insertAdjacentHTML("beforeend", `<h1 class="container">Enjoy:</h1>`);
    root.innerHTML = root.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Array for available colors to choose from then choose randomly

    let colors = ["#F48B7B", "#C6DDCD", "#EAC983", "#AACFDA", "#C5CADD"]
    let rndC = Math.floor(Math.random() * (5 - 0));

    document.body.style.backgroundColor = colors[rndC];

    // Inserting content to page

    root.insertAdjacentHTML("beforeend", `
    
    <div class="pageContent">
        <p>
            <span class="redline">Curated experiences in food, art, and culture.</span> 
            <span class="greenline">Join us on select nights and weekends</span>
            <span class="yellowline">in Downtown Norfolk, Virginia.</span>
        </p>

        <h3>
            Get notified for upcoming events:
        </h3>
        <input id="inputBox" placeholder="">
        <label for="email" id="placeholder" class="placeholder">Your Email</label>
        <button class="btn">Sign Up</button>
    </div>

    <div class="events">
        <h2>
            Upcoming experiences
        </h2>
        <div class="eventHolder">
            <button class="accordion"><span class="date">March 2</span><span class="eventTitle">Panel: Women of Color in Tech</span></button>
            <div class="panel">
                <p>
                Join 757ColorCoded for an exciting evening of conversation, inspiration, and connection as we host our first panel discussion of the year. The panel will be comprised of women of color local to the Hampton Roads area that represent different disciplines in technology and companies of varying sizes.
                </p>
                <button class="btn">Buy Tickets</button>
            </div>
        </div>
    </div>
    `)

    //Move placeholder out of the way if input is clicked and don't move it back in case there's content in the field

    let inputBox = document.querySelector("#inputBox")
    inputBox.addEventListener("focus", function () {
        document.querySelector("#placeholder").classList.add("moveUp")
    });

    inputBox.addEventListener("blur", function () {
        if (inputBox.value.length == 0) {
            document.querySelector("#placeholder").classList.remove("moveUp")
        }
    });

    //Apply custom CSS classes once the preloader animation has ended

    let letterE = document.querySelectorAll(".letter")[0];

    let pageContent = document.querySelectorAll(".pageContent")[0];
    let events = document.querySelectorAll(".events")[0];
    letterE.addEventListener("animationend", function () {
        document.body.classList.add("bg");
        pageContent.classList.add("show");
        events.classList.add("show");
    });

    //Accordion events
    let acc = document.querySelectorAll(".accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");

            let panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Move to the top of the site on reload
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
})

