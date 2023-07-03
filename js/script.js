{
    const tasks = [
        {
            content: "Zadanie numer 1",
            done: false,
        },
        {
            content: "Zadanie numer 2",
            done: true,
        },
    ];

    const addNewTask = (newTask) => {
        tasks.push(
            {
                content: newTask,
            }
        );

        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-input").value.trim();

        if (newTask === "") {
            return
        };

        addNewTask(newTask);
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
            ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };

    init();
}