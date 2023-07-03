{
    const tasks = [
        {
            content: "Wash the dishes",
            done: false,
        },
        {
            content: "Walk the dog",
            done: false,
        },
    ];

    const addNewTask = (newTask) => {
        tasks.push(
            {
                content: newTask,
            })

        render();
    }

    const buttonFocus = () => {
        const button = document.querySelector(".js-button");
        const input = document.querySelector(".js-input");
        button.addEventListener("click", () => {
            input.focus();
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-input").value.trim();

        if (newTask === "") {
            return
        };

        addNewTask(newTask);
        buttonFocus();

    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <div class="form__container">

                    <div class="form__add">
                        <button class="form__tickButton">A</button>
                    </div>
                    <div class="form__listItem form__containerItem--listItem">
                        <li 
                            ${task.done ? " class=\"form__taskDone\"" : ""}
                        >
                        ${task.content}
                        </li>

                    </div>
                    <div class="form__remove">
                        <button class="form__removeButton js-remove">D</button>
                    </div>
                </div>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };

    init();
}