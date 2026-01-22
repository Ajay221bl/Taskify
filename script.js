const bodyTag = document.querySelector("body");



// creating the container for containing the categories
const categoriesContainerDiv = document.querySelector("#categoriesContainerDiv");


// creating the 4 categories
const toDoCategoryDiv = document.createElement("div");
toDoCategoryDiv.setAttribute("id", "ToDoCategoryDiv");
toDoCategoryDiv.setAttribute("class", "category");

const inProgressCategoryDiv = document.createElement("div");
inProgressCategoryDiv.setAttribute("id", "inProgressCategoryDiv");
inProgressCategoryDiv.setAttribute("class", "category");

const underReviewCategoryDiv = document.createElement("div");
underReviewCategoryDiv.setAttribute("id", "underReviewCategoryDiv");
underReviewCategoryDiv.setAttribute("class", "category");

const finishedCategoryDiv = document.createElement("div");
finishedCategoryDiv.setAttribute("id", "finishedCategoryDiv");
finishedCategoryDiv.setAttribute("class", "category");


// creating the category title and logo divs for each of the above 4 categories

    // creating the container that will have the title and logo divs as its children
    // creating for toDo category
const categoryTitleAndLogoContainerDivForFirstCat = document.createElement("div");
categoryTitleAndLogoContainerDivForFirstCat.setAttribute("class", "categoryTitleAndLogoContainerDiv");

    // children: Title div
const categoryTitleDivForFirstCat = document.createElement("div");
categoryTitleDivForFirstCat.setAttribute("class", "categoryTitleDiv");
categoryTitleDivForFirstCat.innerHTML = "To Do"
    // children: Logo div
const categoryLogoDivForFirstCat = document.createElement("div");
categoryLogoDivForFirstCat.setAttribute("class", "categoryLogoDiv");
const logoImgFirstCat = document.createElement("img");
logoImgFirstCat.setAttribute("src", "icons/menu.png");
logoImgFirstCat.setAttribute("class", "logoImg");

categoryLogoDivForFirstCat.appendChild(logoImgFirstCat);


categoryTitleAndLogoContainerDivForFirstCat.appendChild(categoryTitleDivForFirstCat);
categoryTitleAndLogoContainerDivForFirstCat.appendChild(categoryLogoDivForFirstCat);

toDoCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForFirstCat);





const firstCatContentContainerDiv = document.createElement("div");
firstCatContentContainerDiv.setAttribute("id", "firstCatContentContainerDiv")
const firstCatTasksContainerDiv = document.createElement("div");
firstCatTasksContainerDiv.setAttribute("id", "firstCatTasksContainerDiv");

firstCatTasksContainerDiv.setAttribute("class", "dropZone First");
firstCatTasksContainerDiv.classList.add("tasksContainers");
const firstCatButtonDiv = document.createElement("div");
firstCatButtonDiv.setAttribute("id", "firstCatButtonDiv")
firstCatButtonDiv.setAttribute("class", "addTaskButtonDiv")
firstCatButtonDiv.innerHTML = "Add new";
const firstCatButtonPlusSign = document.createElement("div");
firstCatButtonPlusSign.setAttribute("class", "buttonPlusSign");
firstCatButtonPlusSign.innerHTML = "+";
const firstCatButtonContainerDiv = document.createElement("div");
firstCatButtonContainerDiv.setAttribute("class", "buttonContainerDiv");
firstCatButtonContainerDiv.setAttribute("style", "display: flex; justify-content: space-between;")

firstCatButtonContainerDiv.appendChild(firstCatButtonDiv);
firstCatButtonContainerDiv.appendChild(firstCatButtonPlusSign);


firstCatContentContainerDiv.appendChild(firstCatTasksContainerDiv);
firstCatContentContainerDiv.appendChild(firstCatButtonContainerDiv);

firstCatButtonContainerDiv.addEventListener("click", ()=>{
    const parentDiv = firstCatButtonContainerDiv.parentNode;
    console.log(parentDiv)
    const firstChildOfParentDiv  = parentDiv.firstChild;
    const createdTask = createTask();
    firstChildOfParentDiv.appendChild(createdTask);
    })

toDoCategoryDiv.appendChild(firstCatContentContainerDiv);







    //creating for inProgress Category
const categoryTitleAndLogoContainerDivForSecondCat = document.createElement("div");
categoryTitleAndLogoContainerDivForSecondCat.setAttribute("class", "categoryTitleAndLogoContainerDiv");

    // children: title div
const categoryTitleDivForSecondCat = document.createElement("div");
categoryTitleDivForSecondCat.setAttribute("class", "categoryTitleDiv");
categoryTitleDivForSecondCat.innerHTML = "In Progress"
    // children: Logo div
const categoryLogoDivForSecondCat = document.createElement("div");
categoryLogoDivForSecondCat.setAttribute("class", "categoryLogoDiv");
const logoImgSecondCat = document.createElement("img");
logoImgSecondCat.setAttribute("src", "icons/menu.png");
logoImgSecondCat.setAttribute("class", "logoImg")

categoryLogoDivForSecondCat.appendChild(logoImgSecondCat);

categoryTitleAndLogoContainerDivForSecondCat.appendChild(categoryTitleDivForSecondCat);
categoryTitleAndLogoContainerDivForSecondCat.appendChild(categoryLogoDivForSecondCat);

inProgressCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForSecondCat);




const secondCatContentContainerDiv = document.createElement("div");
secondCatContentContainerDiv.setAttribute("id", "secondCatContentContainerDiv")
const secondCatTasksContainerDiv = document.createElement("div");
secondCatTasksContainerDiv.setAttribute("id", "secondCatTasksContainerDiv");
secondCatTasksContainerDiv.setAttribute("class", "dropZone Second");
secondCatTasksContainerDiv.classList.add("tasksContainers")
const secondCatButtonDiv = document.createElement("div");
secondCatButtonDiv.setAttribute("id", "secondCatButtonDiv")
secondCatButtonDiv.setAttribute("class", "addTaskButtonDiv")
secondCatButtonDiv.innerHTML = "Add new";
const secondCatButtonPlusSign = document.createElement("div");
secondCatButtonPlusSign.setAttribute("class", "buttonPlusSign");
secondCatButtonPlusSign.innerHTML = "+";
const secondCatButtonContainerDiv = document.createElement("div");
secondCatButtonContainerDiv.setAttribute("class", "buttonContainerDiv");
secondCatButtonContainerDiv.setAttribute("style", "display: flex; justify-content: space-between;")

secondCatButtonContainerDiv.appendChild(secondCatButtonDiv);
secondCatButtonContainerDiv.appendChild(secondCatButtonPlusSign);


secondCatContentContainerDiv.appendChild(secondCatTasksContainerDiv);
secondCatContentContainerDiv.appendChild(secondCatButtonContainerDiv);

secondCatButtonContainerDiv.addEventListener("click", ()=>{
    const parentDiv = secondCatButtonContainerDiv.parentNode;
    console.log(parentDiv)
    const firstChildOfParentDiv  = parentDiv.firstChild;
    const createdTask = createTask();
    firstChildOfParentDiv.appendChild(createdTask);
    })
inProgressCategoryDiv.appendChild(secondCatContentContainerDiv);








    //creating for underReview Category
const categoryTitleAndLogoContainerDivForThirdCat = document.createElement("div");
categoryTitleAndLogoContainerDivForThirdCat.setAttribute("class", "categoryTitleAndLogoContainerDiv");

    // children: Title div
const categoryTitleDivForThirdCat = document.createElement("div");
categoryTitleDivForThirdCat.setAttribute("class", "categoryTitleDiv");
categoryTitleDivForThirdCat.innerHTML = "Under Review"
    // children: Logo div
const categoryLogoDivForThirdCat = document.createElement("div");
categoryLogoDivForThirdCat.setAttribute("class", "categoryLogoDiv");
const logoImgThirdCat = document.createElement("img");
logoImgThirdCat.setAttribute("src", "icons/menu.png");
logoImgThirdCat.setAttribute("class", "logoImg")

categoryLogoDivForThirdCat.appendChild(logoImgThirdCat);

categoryTitleAndLogoContainerDivForThirdCat.appendChild(categoryTitleDivForThirdCat);
categoryTitleAndLogoContainerDivForThirdCat.appendChild(categoryLogoDivForThirdCat);

underReviewCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForThirdCat);



const thirdCatContentContainerDiv = document.createElement("div");
thirdCatContentContainerDiv.setAttribute("id", "thirdCatContentContainerDiv");
const thirdCatTasksContainerDiv = document.createElement("div");
thirdCatTasksContainerDiv.setAttribute("id", "thirdCatTasksContainerDiv");
thirdCatTasksContainerDiv.setAttribute("class", "dropZone Three");
thirdCatTasksContainerDiv.classList.add("tasksContainers")
const thirdCatButtonDiv = document.createElement("div");
thirdCatButtonDiv.setAttribute("class", "addTaskButtonDiv")
thirdCatButtonDiv.innerHTML = "Add new";
const thirdCatButtonPlusSign = document.createElement("div");
thirdCatButtonPlusSign.setAttribute("class", "buttonPlusSign");
thirdCatButtonPlusSign.innerHTML = "+";
const thirdCatButtonContainerDiv = document.createElement("div");
thirdCatButtonContainerDiv.setAttribute("class", "buttonContainerDiv");
thirdCatButtonContainerDiv.setAttribute("style", "display: flex; justify-content: space-between;")

thirdCatButtonContainerDiv.appendChild(thirdCatButtonDiv);
thirdCatButtonContainerDiv.appendChild(thirdCatButtonPlusSign);


thirdCatContentContainerDiv.appendChild(thirdCatTasksContainerDiv);
thirdCatContentContainerDiv.appendChild(thirdCatButtonContainerDiv);

thirdCatButtonContainerDiv.addEventListener("click", ()=>{
    const parentDiv = thirdCatButtonContainerDiv.parentNode;
    console.log(parentDiv)
    const firstChildOfParentDiv  = parentDiv.firstChild;
    const createdTask = createTask();
    firstChildOfParentDiv.appendChild(createdTask);
    })
underReviewCategoryDiv.appendChild(thirdCatContentContainerDiv);









    //creating for finished Category
const categoryTitleAndLogoContainerDivForFourthCat = document.createElement("div");
categoryTitleAndLogoContainerDivForFourthCat.setAttribute("class", "categoryTitleAndLogoContainerDiv");

    // children: Title div
const categoryTitleDivForFourthCat = document.createElement("div");
categoryTitleDivForFourthCat.setAttribute("class", "categoryTitleDiv");
categoryTitleDivForFourthCat.innerHTML = "Finished"
    // children: Logo div
const categoryLogoDivForFourthCat = document.createElement("div");
categoryLogoDivForFourthCat.setAttribute("class", "categoryLogoDiv");
const logoImgFourthCat = document.createElement("img");
logoImgFourthCat.setAttribute("src", "icons/menu.png");
logoImgFourthCat.setAttribute("class", "logoImg")

categoryLogoDivForFourthCat.appendChild(logoImgFourthCat);

categoryTitleAndLogoContainerDivForFourthCat.appendChild(categoryTitleDivForFourthCat);
categoryTitleAndLogoContainerDivForFourthCat.appendChild(categoryLogoDivForFourthCat);

finishedCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForFourthCat);


const fourthCatContentContainerDiv = document.createElement("div");
fourthCatContentContainerDiv.setAttribute("id", "fourthCatContentContainerDiv")
const fourthCatTasksContainerDiv = document.createElement("div");
fourthCatTasksContainerDiv.setAttribute("id", "fourthCatTasksContainerDiv");
fourthCatTasksContainerDiv.setAttribute("class", "dropZone Four");
fourthCatTasksContainerDiv.classList.add("tasksContainers")
const fourthCatButtonDiv = document.createElement("div");
fourthCatButtonDiv.setAttribute("id", "fourthCatButtonDiv")
fourthCatButtonDiv.setAttribute("class", "addTaskButtonDiv")
fourthCatButtonDiv.innerHTML = "Add new";
const fourthCatButtonPlusSign = document.createElement("div");
fourthCatButtonPlusSign.setAttribute("class", "buttonPlusSign");
fourthCatButtonPlusSign.innerHTML = "+";
const fourthCatButtonContainerDiv = document.createElement("div");
fourthCatButtonContainerDiv.setAttribute("class", "buttonContainerDiv");
fourthCatButtonContainerDiv.setAttribute("style", "display: flex; justify-content: space-between;")

fourthCatButtonContainerDiv.appendChild(fourthCatButtonDiv);
fourthCatButtonContainerDiv.appendChild(fourthCatButtonPlusSign);


fourthCatContentContainerDiv.appendChild(fourthCatTasksContainerDiv);
fourthCatContentContainerDiv.appendChild(fourthCatButtonContainerDiv);

fourthCatButtonContainerDiv.addEventListener("click", ()=>{
    const parentDiv = fourthCatButtonContainerDiv.parentNode;
    console.log(parentDiv)
    const firstChildOfParentDiv  = parentDiv.firstChild;
    const createdTask = createTask();
    firstChildOfParentDiv.appendChild(createdTask);
    })

finishedCategoryDiv.appendChild(fourthCatContentContainerDiv);







// appending the individual categories to the parent container
categoriesContainerDiv.appendChild(toDoCategoryDiv);
categoriesContainerDiv.appendChild(inProgressCategoryDiv);
categoriesContainerDiv.appendChild(underReviewCategoryDiv);
categoriesContainerDiv.appendChild(finishedCategoryDiv);


// appending the parent container to the body
bodyTag.appendChild(categoriesContainerDiv);



// function for creating a task in the app
function createTask(){
    var descriptions = ["task description", "some description here", "context here", "task description here"]
    var priorities = ["Low", "Medium", "Urgent"]
    
    const taskContainerDiv = document.createElement("div");
    taskContainerDiv.setAttribute("class", "dragElement");
    taskContainerDiv.classList.add("taskContainerDiv")
    taskContainerDiv.setAttribute("draggable", "true");
    taskContainerDiv.setAttribute("style", "padding: 10px 10px 10px 10px; border-radius: 5px; margin-bottom: 5px;")
    const task = document.createElement("div");
    task.setAttribute("class", "task");
    const taskName = document.createElement("div");
    taskName.innerHTML = "Task xyz";
    taskName.setAttribute("class", "taskNames");
    taskName.setAttribute("style", "font-weight: 900; font-size: 20px;")
    const taskDescription  = document.createElement("div");
    taskDescription.setAttribute("class", "taskDescriptions;");
    taskDescription.setAttribute("style", "min-width: 200px; max-width: 200px; color: grey")
    taskDescription.innerHTML = descriptions[Math.floor(Math.random()* descriptions.length)]
    const taskPriority = document.createElement("div");
    taskPriority.setAttribute("class", "taskPriorities");
    taskPriority.setAttribute("style", "font-size: 10px;; margin-right: 5px; border-radius: 10px; padding:4px 6px 4px 6px;color: white;")
    taskPriority.innerHTML = priorities[Math.floor(Math.random() * priorities.length)]
    if(taskPriority.innerHTML=="Low"){
        taskPriority.style.backgroundColor = "rgb(55, 223, 37)";
    }else if(taskPriority.innerHTML=="Medium"){
        taskPriority.style.backgroundColor = "rgb(248, 156, 64)";
    }else if(taskPriority.innerHTML=="Urgent"){
        taskPriority.style.backgroundColor = "rgb(249, 71, 71)";
    }
    const taskDate = document.createElement("div");
    taskDate.setAttribute("class", "taskDates");
    taskDate.innerHTML = "Jan 22, 2024";
    taskDate.setAttribute("style", "font-size: 10px; color: grey")
    const taskStartTime = document.createElement("div");
    taskStartTime.setAttribute("class", "taskStartTimes");
    taskStartTime.setAttribute("style", "font-size: 10px; color: grey");
    taskStartTime.innerHTML = "1 hr ago";
    const taskPriorityDateTimeContainer = document.createElement("div");
    taskPriorityDateTimeContainer.setAttribute("class", "taskPriorityDateTimeContainer");
    const taskPriorityAndDateContainer = document.createElement("div");
    taskPriorityAndDateContainer.setAttribute("class", "taskPriorityAndDateContainer");
    const dateLogoAndDateContainer = document.createElement("div");
    dateLogoAndDateContainer.setAttribute("class", "dateLogoAndDateContainer");
    const dateLogo = document.createElement("img");
    dateLogo.setAttribute("src", "icons/clock.png");
    dateLogo.setAttribute("class", "dateLogo");
    dateLogo.setAttribute("style", "height: 15px; width: 15px; margin-right: 3px;")
    dateLogoAndDateContainer.appendChild(dateLogo);
    dateLogoAndDateContainer.appendChild(taskDate);
    taskPriorityAndDateContainer.append(taskPriority);
    taskPriorityAndDateContainer.append(dateLogoAndDateContainer);
    taskPriorityDateTimeContainer.append(taskPriorityAndDateContainer);
    taskPriorityDateTimeContainer.append(taskStartTime);
    task.appendChild(taskName);
    task.append(taskDescription);
    task.append(taskPriorityDateTimeContainer);
    
    taskContainerDiv.appendChild(task);

    taskContainerDiv.addEventListener("dragstart", (e) => {
        taskContainerDiv.classList.add("dragging");
    });

    taskContainerDiv.addEventListener("dragend", () => {
        taskContainerDiv.classList.remove("dragging");
    });

    return taskContainerDiv;

}



// implementing drag-drop functionality

var dragItem = document.querySelector(".dragElement");
var dropZoneSet = Array.from(document.querySelectorAll(".dropZone"));

//adding eventlistener to each element of the dropZoneSet array


dropZoneSet.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const draggingElement = document.querySelector(".dragging");

        if(draggingElement){
            dropzone.appendChild(draggingElement);
        };
    });
});







