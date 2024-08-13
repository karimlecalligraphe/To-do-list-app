<template>
    <!-- view task -->
    <div id="view-task-overlay" class="overlay view-task-overlay hide">
        <div class="overlay-content green-background">
            <!-- close button -->
            <button class="button circle-button blue-background flex justify-center items-center close-button">
                <iconify-icon icon="material-symbols:close-rounded" style="color: black" width="26"
                    height="26"></iconify-icon>
            </button>
            <h1 class="header no-margin">Name</h1>
            <p class="value">some long task name</p>
            <h1 class="header">Description</h1>
            <p class="value">
                some long task namesome long task namesome long task name
            </p>
            <div class="flex items-center">
                <h1 class="header min-width">Due date</h1>
                <p class="value">January 7, 2020</p>
            </div>
            <div class="flex items-center">
                <h1 class="header min-width">Status</h1>
                <p class="value status-value">
                    <span class="circle blue-background"></span><span>Doing</span>
                </p>
            </div>
            <div class="control-buttons-container">
                <!-- edit button -->
                <button class="button circle-button pink-background flex justify-center items-center">
                    <iconify-icon icon="material-symbols:edit-rounded" style="color: black" width="24"
                        height="24"></iconify-icon>
                </button>
                <!-- delete button -->
                <button id="delete-task-cta"
                    class="button circle-button pink-background flex justify-center items-center">
                    <iconify-icon icon="ic:round-delete" style="color: black" width="24" height="24"></iconify-icon>
                </button>
            </div>
        </div>
    </div>
</template>