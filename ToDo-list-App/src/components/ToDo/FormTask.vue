<template>
    <!-- add + update task -->
    <div id="set-task-overlay" class="overlay set-task-overlay hide">
        <div class="overlay-content pink-background">
            <!-- close button -->
            <button class="button circle-button blue-background flex justify-center items-center close-button">
                <iconify-icon icon="material-symbols:close-rounded" style="color: black" width="26"
                    height="26"></iconify-icon>
            </button>
            <h1 class="header">Add task</h1>
            <form class="form" autocomplete="off">
                <label for="name" class="label">Name</label>
                <input type="text" name="name" id="name" class="input white-background" required />
                <label for="description" class="label">Description</label>
                <textarea name="description" id="description" rows="8" class="textarea-input white-background"
                    required></textarea>
                <h2 class="label">Due date</h2>
                <div class="divided-inputs-container">
                    <div>
                        <label for="due-date-day" class="secondary-label">Day</label>
                        <input type="text" name="due-date-day" id="due-date-day" class="input white-background"
                            required />
                    </div>
                    <div>
                        <label for="due-date-month" class="secondary-label">Month</label>
                        <input type="text" name="due-date-month" id="due-date-month" class="input white-background"
                            required />
                    </div>
                    <div>
                        <label for="due-date-year" class="secondary-label">Year</label>
                        <input type="text" name="due-date-year" id="due-date-year" class="input white-background"
                            required />
                    </div>
                </div>
                <h2 class="label">Status</h2>
                <div id="status-select"
                    class="status-select white-background flex items-center justify-between cursor-pointer">
                    <span>To do</span>
                    <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18"
                        height="18" class="arrow-icon"></iconify-icon>
                </div>
                <ul id="status-dropdown" class="status-dropdown white-background hide">
                    <li>
                        <input type="radio" id="to-do-radio" name="status-option" value="To do" class="radio-input" />
                        <label for="to-do-radio" class="radio-label">
                            <span class="circle pink-background"></span><span>To do</span>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="doing-radio" name="status-option" value="Doing" class="radio-input" />
                        <label for="doing-radio" class="radio-label">
                            <span class="circle blue-background"></span><span>Doing</span>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="done-radio" name="status-option" value="Done" class="radio-input" />
                        <label for="done-radio" class="radio-label">
                            <span class="circle green-background"></span><span>Done</span>
                        </label>
                    </li>
                </ul>
                <div class="text-center">
                    <button type="submit" class="button regular-button green-background cta-button">
                        Add task
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>