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
    // Instructor Modal
    let modal_activated = false
    let modal = document.querySelector(".instructor-modal")

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

    // Form
    let form_activated = false
    let form = document.querySelector(".modal-form")

    function openForm() {
        if (!form_activated) {
            fadeIn(".modal-form")
            form_activated = true
            document.body.style.overflow = "hidden"
        }
    }

    function closeForm() {
        fadeOut(".modal-form")
        form_activated = false
        document.body.style.overflow = "auto"
    }

    let activators = document.querySelectorAll(".form-activate")
    for (let i = 0; i < activators.length; i++) {
        activators[i].addEventListener("click", function (e) {
            openForm()
        })
    }
    form.addEventListener("click", function (e) {
        closeForm()
    })

    document.querySelector(".geo-btn").addEventListener("click", function (e) {
        e.preventDefault()
        window.open('https://yandex.ru/maps/20523/elektrostal/?from=api-maps&ll=38.516557%2C55.761604&mode=usermaps&origin=jsapi_2_1_78&um=constructor%3A0b22c640aafb792ed0bf16a7a22ecfe69157072454cdbcee857036feb4c0ff28&z=9');
    })
})