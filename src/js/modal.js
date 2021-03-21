function fadeIn(el) {
    var opacity = 0.01;
    document.querySelector(el).classList.add("visible");
    var timer = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        document.querySelector(el).style.opacity = opacity;
        opacity += opacity * 0.1;
    }, 10);
}

function fadeOut(el) {
    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            document.querySelector(el).classList.remove("visible");
        }
        document.querySelector(el).style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 10);
}

let instructors = {
    "1": {
        name: "Вавулин Михаил",
        description: "Его стаж более 16 лет, связал с мотоциклами свою жизнь, это главное увлечение, работа и спорт.\n" +
            "                Профессионально ремонтирует и подбирает мотоциклы, отправляется в поразительные мототуры и практикует\n" +
            "                езду на заднем колесе. Считает, что во время обучения, необходимо делиться с учениками личным опытом,\n" +
            "                так как это в дальнейшем убережет их от ошибок на дороге.",
        image: "img/instructor/photos/instructor-img.png"
    },
    "2": {
        name: "Вавулин Михаил",
        description: "Его стаж более 16 лет, связал с мотоциклами свою жизнь, это главное увлечение, работа и спорт.\n" +
            "                Профессионально ремонтирует и подбирает мотоциклы, отправляется в поразительные мототуры и практикует\n" +
            "                езду на заднем колесе. Считает, что во время обучения, необходимо делиться с учениками личным опытом,\n" +
            "                так как это в дальнейшем убережет их от ошибок на дороге.",
        image: "img/instructor/photos/instructor-img.png"
    },
    "3": {
        name: "Вавулин Михаил",
        description: "Его стаж более 16 лет, связал с мотоциклами свою жизнь, это главное увлечение, работа и спорт.\n" +
            "                Профессионально ремонтирует и подбирает мотоциклы, отправляется в поразительные мототуры и практикует\n" +
            "                езду на заднем колесе. Считает, что во время обучения, необходимо делиться с учениками личным опытом,\n" +
            "                так как это в дальнейшем убережет их от ошибок на дороге.",
        image: "img/instructor/photos/instructor-img.png"
    },
    "4": {
        name: "Вавулин Михаил",
        description: "Его стаж более 16 лет, связал с мотоциклами свою жизнь, это главное увлечение, работа и спорт.\n" +
            "                Профессионально ремонтирует и подбирает мотоциклы, отправляется в поразительные мототуры и практикует\n" +
            "                езду на заднем колесе. Считает, что во время обучения, необходимо делиться с учениками личным опытом,\n" +
            "                так как это в дальнейшем убережет их от ошибок на дороге.",
        image: "img/instructor/photos/instructor-img.png"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let modal_activated = false
    let modal = document.querySelector(".instructor-modal")

    function toggleModal(instructor_id) {
        console.log(instructor_id)
        if (!modal_activated) {
            document.getElementById("instructor-name").innerText = instructors[instructor_id].name
            document.getElementById("instructor-desc").innerText = instructors[instructor_id].description
            document.getElementById("instructor-image").src = instructors[instructor_id].image
            fadeIn(".instructor-modal")
            modal_activated = true
            document.body.style.overflow = "hidden"
        } else {
            fadeOut(".instructor-modal")
            modal_activated = false
            document.body.style.overflow = "auto"
        }
    }

    function openModal(instructor_id) {
        console.log(instructor_id)
        if (!modal_activated) {
            document.getElementById("instructor-name").innerText = instructors[instructor_id].name
            document.getElementById("instructor-desc").innerText = instructors[instructor_id].description
            document.getElementById("instructor-image").src = instructors[instructor_id].image
            fadeIn(".instructor-modal")
            modal_activated = true
            document.body.style.overflow = "hidden"
        }
    }

    function closeModal() {
        fadeOut(".instructor-modal")
        modal_activated = false
        document.body.style.overflow = "auto"
    }

    modal.addEventListener("click", function (e) {
        closeModal()
    })
    let instructor_entities = document.querySelectorAll(".instructor-entity")
    for (let i = 0; i < instructor_entities.length; i++) {
        instructor_entities[i].addEventListener("click", function (e) {
            openModal(instructor_entities[i].dataset.instructorId)
        })
    }

})