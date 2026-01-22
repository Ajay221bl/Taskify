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
logoImgFirstCat.setAttribute("src", "icons/grip-vertical.png");
logoImgFirstCat.setAttribute("class", "logoImg");

categoryLogoDivForFirstCat.appendChild(logoImgFirstCat);


categoryTitleAndLogoContainerDivForFirstCat.appendChild(categoryTitleDivForFirstCat);
categoryTitleAndLogoContainerDivForFirstCat.appendChild(categoryLogoDivForFirstCat);

toDoCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForFirstCat);



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
logoImgSecondCat.setAttribute("src", "icons/grip-vertical.png");
logoImgSecondCat.setAttribute("class", "logoImg")

categoryLogoDivForSecondCat.appendChild(logoImgSecondCat);

categoryTitleAndLogoContainerDivForSecondCat.appendChild(categoryTitleDivForSecondCat);
categoryTitleAndLogoContainerDivForSecondCat.appendChild(categoryLogoDivForSecondCat);

inProgressCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForSecondCat);



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
logoImgThirdCat.setAttribute("src", "icons/grip-vertical.png");
logoImgThirdCat.setAttribute("class", "logoImg")

categoryLogoDivForThirdCat.appendChild(logoImgThirdCat);

categoryTitleAndLogoContainerDivForThirdCat.appendChild(categoryTitleDivForThirdCat);
categoryTitleAndLogoContainerDivForThirdCat.appendChild(categoryLogoDivForThirdCat);

underReviewCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForThirdCat);




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
logoImgFourthCat.setAttribute("src", "icons/grip-vertical.png");
logoImgFourthCat.setAttribute("class", "logoImg")

categoryLogoDivForFourthCat.appendChild(logoImgFourthCat);

categoryTitleAndLogoContainerDivForFourthCat.appendChild(categoryTitleDivForFourthCat);
categoryTitleAndLogoContainerDivForFourthCat.appendChild(categoryLogoDivForFourthCat);

finishedCategoryDiv.appendChild(categoryTitleAndLogoContainerDivForFourthCat);


const fourthCatContentContainerDiv = document.createElement("div");
fourthCatContentContainerDiv.setAttribute("id", "fourthCatContentContainerDiv")
const fourthCatTasksContainerDiv = document.createElement("div");
fourthCatTasksContainerDiv.setAttribute("id", "fourthCatTasksContainerDiv");
const fourthCatButtonDiv = document.createElement("div");
fourthCatButtonDiv.setAttribute("id", "fourthCatButtonDiv")
fourthCatButtonDiv.setAttribute("class", "addTaskButtonDiv")
fourthCatButtonDiv.innerHTML = "Add new";

fourthCatContentContainerDiv.appendChild(fourthCatTasksContainerDiv);
fourthCatContentContainerDiv.appendChild(fourthCatButtonDiv);

fourthCatButtonDiv.addEventListener("click", ()=>{
    const parentDiv = fourthCatButtonDiv.parentNode;
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


function createTask(){
    const taskContainerDiv = document.createElement("div");
    taskContainerDiv.setAttribute("id", "taskContainerDiv");
    const task = document.createElement("div");
    task.setAttribute("id", "task");
    const taskName = document.createElement("div");
    taskName.innerHTML = "Task xyz";
    taskName.setAttribute("id", "taskName");
    task.appendChild(taskName);
    taskContainerDiv.appendChild(task);

    return taskContainerDiv;
}






