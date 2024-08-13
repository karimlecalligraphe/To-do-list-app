<template>
    <!-- Because body has height 100%, we need a container to wrap the individual 
    elements. The purpose is to add top & bottom padding -->
    <div class="content-container">
        <!-- success notification -->
        <div id="notification" class="notification green-background">
            <iconify-icon icon="mdi:check-circle-outline" style="color: black" width="24" height="24"></iconify-icon>
            <p>The task was deleted</p>
        </div>
        <!-- header -->
        <div class="max-width-container">
            <div class="header flex items-center justify-between">
                <h1 class="title">My tasks</h1>
                <div class="buttons-container">
                    <button id="add-task-cta" class="button regular-button blue-background">
                        Add task
                    </button>
                    <!-- <button class="sign-out-cta">Sign out</button> -->
                </div>
            </div>
        </div>
        <!-- radio buttons -->
        <div class="radio-buttons-container">
            <div class="max-width-container flex">
                <div class="radio-container">
                    <input type="radio" id="list" name="view-option" value="list" class="radio-input" checked />
                    <label for="list" class="radio-label">
                        <!-- list-bulleted -->
                        <iconify-icon icon="material-symbols:format-list-bulleted-rounded" style="color: black"
                            width="24" height="24"></iconify-icon>
                        <span>List</span>
                    </label>
                </div>
                <div class="radio-container">
                    <input type="radio" id="board" name="view-option" value="board" class="radio-input" />
                    <label for="board" class="radio-label">
                        <!-- grid -->
                        <iconify-icon icon="ic:round-grid-view" style="color: black" width="24"
                            height="24"></iconify-icon>
                        <span>Board</span>
                    </label>
                </div>
            </div>
        </div>
        <!-- tasks -->
        <div class="max-width-container">
            <!-- list view -->
            <div id="list-view" class="list-view">
                <div class="list-container pink">
                    <h2 class="list-header">
                        <span class="circle pink-background"></span><span class="text">To do</span>
                    </h2>
                    <ul class="tasks-list">
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="list-container blue">
                    <h2 class="list-header">
                        <span class="circle blue-background"></span><span class="text">Doing</span>
                    </h2>
                    <ul class="tasks-list">
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="list-container green">
                    <h2 class="list-header">
                        <span class="circle green-background"></span><span class="text">Done</span>
                    </h2>
                    <ul class="tasks-list">
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <p class="task-name">Design UI</p>
                                <p class="task-due-date">Due on January 7, 2020</p>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- board view -->
            <div id="board-view" class="board-view hide">
                <!-- list -->
                <div>
                    <h2 class="list-header">
                        <span class="circle pink-background"></span><span class="text">To do</span>
                    </h2>
                    <ul class="tasks-list pink">
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- list -->
                <div>
                    <h2 class="list-header">
                        <span class="circle blue-background"></span><span class="text">Doing</span>
                    </h2>
                    <ul class="tasks-list blue">
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- list -->
                <div>
                    <h2 class="list-header">
                        <span class="circle green-background"></span><span class="text">Done</span>
                    </h2>
                    <ul class="tasks-list green">
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                        <li class="task-item">
                            <button class="task-button">
                                <div>
                                    <p class="task-name">Design UI</p>
                                    <p class="task-due-date">Due on January 7, 2020</p>
                                </div>
                                <!-- arrow -->
                                <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black"
                                    width="18" height="18" class="arrow-icon"></iconify-icon>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>